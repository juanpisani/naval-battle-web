import WebSocketInstance from '../../../socket/socket';
import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import {PlayerCard} from "../../../common/components/PlayerCard";
import "./GameLobbyScreenStyle.css";


export default class GameLobbyScreen extends Component {
    //TODO TENER EL ID DE LA SESSION EN LA URL PARA PODER JUGAR VARIOS JUEGOS Y REFRESHEAR
    constructor(props) {
        console.log(props);
        super(props);
        // WebSocketInstance.connect(this.props.roomId);
        // this.waitForSocketConnection(() => {
        //     WebSocketInstance.sendMessageConnected(this.props.roomId, this.props.user.id);
        //     WebSocketInstance.addCallbacks(this.startGameCallback.bind(this), this.waitingCallBack.bind(this));
        // });
    }

    // componentWillMount() {
    //     !this.props.isLoggedIn && this.props.history.push("/");
    //     // console.log("constructos" + props.roomId)
    //     // this.state = {};
    //     }

    // waitForSocketConnection(callback) {
    //     const component = this;
    //     setTimeout(
    //         function(){
    //             if(WebSocketInstance.state() === 1){
    //                 console.log('Connection is made');
    //                 callback();
    //                 return;
    //             }
    //             else{
    //                 console.log("Waiting for connection..");
    //                 component.waitForSocketConnection(callback);
    //             }
    //         }, 100);
    // }

    // startGameCallback(playerOne, playerTwo){
    //     debugger;
    //     this.props.startGame(playerOne, playerTwo);
    //     console.log("GAME STARTED")
    // }

    // waitingCallBack(){
    //     this.console.log("WAITING")
    // }

    render() {
        return (
            <div className="page">
                <div className="homeContainer">
                    <div className="titleContainer">
                        <Card className="homeCard">
                            <Card.Body>
                                <Card.Title className="homeCardTitle">
                                    <p style={{color:"blue"}}>Naval battle</p>
                                </Card.Title>
                                    {this.props.opponentReady ?
                                        <div>
                                            <Card.Title
                                                className="homeCardTitle">GAME {this.props.roomId.toUpperCase()}
                                            </Card.Title>
                                            <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                                                <PlayerCard player={this.props.playerOne} />
                                                <PlayerCard player={this.props.playerTwo} />
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <Card.Title className="homeCardTitle">Waiting for an opponent</Card.Title>
                                            <img style={{width:"20%", height:"20%", marginTop:"8%", marginBottom:"10%"}}
                                                 src={require('../../../assets/waiting.gif')} alt="waiting..." />
                                        </div>
                                    }
                            </Card.Body>
                        </Card>
                    </div>
                    {/*todo poner timer y hacer redirect a /game */}
                </div>
            </div>
        );
    }
}