import config from "../config";

class WebSocketService {
    static instance = null;
    callbacks = {};

    static getInstance() {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor() {
        this.socketRef = null;
    }

    connect(roomId) {
        const path = config.API_PATH + roomId + "/";
        this.socketRef = new WebSocket(path);
        this.socketRef.onopen = () => {
            console.log('WebSocket open');
        };
        this.socketRef.onmessage = e => {
            this.socketNewMessage(e.data);
        };
        this.socketRef.onerror = e => {
            console.log(e.message);
        };
        this.socketRef.onclose = () => {
            console.log("WebSocket closed let's reopen");
            this.connect(roomId);
        };
    }

    socketNewMessage(data) {
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
        if (Object.keys(this.callbacks).length === 0) {
            return;
        }
        if (command === 'start_game') {
            this.callbacks[command](parsedData.message);
        }
        if (command === 'waiting') {
            console.log(parsedData.message);
        }
    }

    sendMessageConnected(roomId, userId) {
        this.sendMessage({ command: 'connected', roomId: roomId, userId: userId})
    }


    // registerToPlay(username) {
    //     this.sendMessage({ command: 'ready_to_play', username: username });
    // }

    addCallbacks(startGameCallBack) {
        this.callbacks['start_game'] = startGameCallBack;
    }

    sendMessage(data) {
        try {
            this.socketRef.send(JSON.stringify({ ...data }));
        }
        catch(err) {
            console.log(err.message);
        }
    }

    state() {
        return this.socketRef?.readyState;
    }

    waitForSocketConnection(callback){
        const socket = this.socketRef;
        const recursion = this.waitForSocketConnection;
        setTimeout(
            function () {
                if (socket.readyState === 1) {
                    console.log("Connection is made")
                    if(callback != null){
                        callback();
                    }
                    return;

                } else {
                    console.log("wait for connection...")
                    recursion(callback);
                }
            }, 1); // wait 5 milisecond for the connection...
    }
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;