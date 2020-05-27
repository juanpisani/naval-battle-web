import WebSocketInstance from '../../../socket/socket';
import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import {PlayerCard} from "../../../common/components/PlayerCard";
import {Board} from "../../../game/Board";


export default class SetPiecesScreen extends Component {
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
                                    <p style={{color:"white", fontSize:'40px'}}>Set your pieces</p>
                                </Card.Title>
                                <Board/>
                            </Card.Body>
                        </Card>
                    </div>
                    {/*todo poner timer*/}
                </div>
            </div>
        );
    }
}