import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {PlayerCard} from "../../../common/components/PlayerCard";
import Button from "@material-ui/core/Button";

export default class GameLobbyScreen extends Component {
    //TODO TENER EL ID DE LA SESSION EN LA URL PARA PODER JUGAR VARIOS JUEGOS Y REFRESHEAR

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
        const history = this.props.history;
        const startGame = this.props.startGame;
        this.props.socket.on('ready_to_start', function(msg){
            console.log('ready_to_start', msg);
            startGame(msg.player_1, msg.player_2, msg.game);
        });
        this.props.socket.on('room_update', function(msg){
            console.log('room_update', msg);
        });
        this.props.socket.on('ready_for_setup', function(msg){
            console.log('ready_for_setup', msg);
            history.push("/setPieces")
        });
    }

    readyToPlay(userId, gameId) {
        this.props.socket.emit('join_room', {user_id: userId, game_id: gameId});
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <p style={{color:"blue"}}>Battleship</p>
                        </Card.Title>
                            {this.props.opponentReady ?
                                <div>
                                    <Card.Title>GAME {this.props.roomId}
                                    </Card.Title>
                                    <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                                        <PlayerCard player={this.props.playerOne} />
                                        <PlayerCard player={this.props.playerTwo} />
                                        <Button onClick={() => this.readyToPlay(this.props.user.id, this.props.gameId)}>
                                            Empezar!
                                        </Button>
                                    </div>
                                </div>
                                :
                                <div>
                                    <Card.Title>Waiting for an opponent</Card.Title>
                                    <img style={{width:"20%", height:"20%", marginTop:"8%", marginBottom:"10%"}}
                                         src={require('../../../assets/waiting.gif')} alt="waiting..." />
                                </div>
                            }
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
