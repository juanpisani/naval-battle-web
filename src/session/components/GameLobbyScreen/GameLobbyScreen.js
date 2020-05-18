import WebSocketInstance from '../../../socket/socket';
import React, {Component} from "react";

export default class GameLobbyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        WebSocketInstance.connect();
        this.waitForSocketConnection(() => {
            WebSocketInstance.addCallbacks(this.addGame.bind(this));
            WebSocketInstance.registerToPlay(this.props.user);
        });
    }

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/")
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


    addGame(game) {
        this.setState({ game: game});
    }

    getMessage(message) {
        this.setState({ message: message});
    }

    render() {
        return (
            <div>
                <h1>WAITING</h1>
            </div>
        );
    }
}