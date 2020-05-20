import WebSocketInstance from '../../../socket/socket';
import React, {Component} from "react";

export default class GameLobbyScreen extends Component {
    constructor(props) {
        super(props);
        WebSocketInstance.connect(this.props.roomId);
        this.waitForSocketConnection(() => {
            WebSocketInstance.sendMessageConnected(this.props.roomId, this.props.user.id);
            WebSocketInstance.addCallbacks(this.startGameCallback.bind(this), this.waitingCallBack.bind(this));
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

    startGameCallback(playerOne, playerTwo){
        debugger;
        this.props.startGame(playerOne, playerTwo);
        console.log("GAME STARTED")
    }

    waitingCallBack(){
        this.console.log("WAITING")
    }

    render() {
        return (
            <div>
                <h1>{this.props.opponentReady ? "CONNECTED": "WAITING"}</h1>
                <div>
                    {this.props.opponentReady &&
                    <div>
                        <p>PLAYER 1: {this.props.playerOne.email}</p>
                        <p>PLAYER 2: {this.props.playerTwo.email}</p>
                    </div>}
                </div>
            </div>
        );
    }
}