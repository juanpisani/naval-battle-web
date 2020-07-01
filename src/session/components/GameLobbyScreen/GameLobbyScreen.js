import React, {Component} from "react";
import {PlayerCard} from "../../../common/components/PlayerCard";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

export default class GameLobbyScreen extends Component {

    componentWillMount() {
        this.props.socket.on('ready_to_start', msg => {
            this.props.startGame(msg.player_1, msg.player_2, msg.game);
        });
        this.props.socket.on('room_update', msg => {
            console.log('room_update', msg);
        });
        this.props.socket.on('ready_for_setup', msg => {
            this.props.history.push("/setPieces")
        });
        this.props.socket.on('game_ended', msg => {
            this.props.isWinner(msg.winner.user_id === this.props.user.id);
            this.props.history.push("/results")
        });
        window.addEventListener("beforeunload", ev => {
            this.props.socket.emit("left_room", {game_id: this.props.gameId, user_id: this.props.user.id});
        });
    }

    readyToPlay(userId, gameId) {
        this.props.socket.emit('join_room', {user_id: userId, game_id: gameId});
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2E2E2E',
                height: '100vh'
            }}>
                <div style={{width: '80%'}}>
                    <Paper style={{backgroundColor: '#FAE4E4'}} elevation={3}>
                        <div style={{padding: '1%'}}>
                            <Paper style={{backgroundColor: '#2E2E2E', height: '100hv'}} elevation={6}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <h3 style={{
                                        color: '#F3C7C7',
                                        fontFamily: 'Titillium Web',
                                        marginTop: '8px'
                                    }}>BATALLA NAVAL</h3>
                                </div>
                            </Paper>
                        </div>
                    </Paper>
                    <div>
                        {this.props.opponentReady ?
                            <Paper style={{backgroundColor: '#FAE4E4'}} elevation={3}>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    marginTop: '5%', padding: '5%', marginLeft: '5%', marginRight: '5%'
                                }}>
                                    <PlayerCard player={this.props.playerOne}/>
                                    <PlayerCard player={this.props.playerTwo}/>
                                </div>
                                <div style={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    marginTop: '5%', padding: '5%'
                                }}>
                                    <div style={{backgroundColor: '#2E2E2E', borderRadius: '5%'}}>
                                        <Button style={{ borderRadius: 50 }}
                                                onClick={() => this.readyToPlay(this.props.user.id, this.props.gameId)}>
                                            <h3 style={{
                                                color: '#F3C7C7',
                                                fontFamily: 'Titillium Web',
                                                marginTop: '8px'}}>
                                                EMPEZAR!
                                            </h3>
                                        </Button>
                                    </div>
                                </div>
                            </Paper> :
                            <Paper style={{backgroundColor: '#FAE4E4', height: '100hv'}} elevation={6}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <h3 style={{
                                        color: '#2E2E2E',
                                        fontFamily: 'Titillium Web',
                                        marginTop: '15px'
                                    }}>ESPERANDO UN OPONENTE</h3>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <img style={{width: "20%", height: "20%", marginTop: "8%", marginBottom: "10%"}}
                                         src={require('../../../assets/loading.gif')} alt="waiting..."/>
                                </div>
                            </Paper>
                        }
                    </div>
                </div>
            </div>);
    }
}
