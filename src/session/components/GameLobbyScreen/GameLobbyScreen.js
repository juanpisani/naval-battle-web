import WebSocketInstance from '../../../socket/socket';
import React, {Component} from "react";

export default class GameLobbyScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.registerToPlayStatus);
        console.log("room id " + this.props.roomId);
        WebSocketInstance.connect(this.props.roomId);
        this.waitForSocketConnection(() => {
            WebSocketInstance.addCallbacks();
            WebSocketInstance.sendMessageConnected(this.props.user.id, this.props.roomId);
            WebSocketInstance.addCallbacks(this.startGameCallback.bind(this));
            // WebSocketInstance.registerToPlay(this.props.user);
        });
    }

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
        // console.log("constructos" + props.roomId)
        // this.state = {};
        }

    waitForSocketConnection(callback) {
        const component = this;
        setTimeout(
            function(){
                if(WebSocketInstance.state() === 1){
                    console.log('Connection is made');
                    callback();
                    return;
                }
                else{
                    console.log("Waiting for connection..");
                    component.waitForSocketConnection(callback);
                }
            }, 100);
    }

    startGameCallback(){
        this.props.startGame();
    }

    render() {
        return (
            <div>
                <h1>{this.props.opponentReady ? "CONNECTED": "WAITING"}</h1>
            </div>
        );
    }
}