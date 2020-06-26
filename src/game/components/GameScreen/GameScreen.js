import {Component} from "react";
import React from "react";
import '../styles/GameStyle.css'
import Battlefield from "../Battlefield";

export class GameScreen extends Component {

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
        const history = this.props.history;
        const processingShot = this.props.processingShot;
        const changeTurn = this.props.changeTurn;
        const userId = this.props.userId;
        this.props.socket.on('shot_processed', function(msg){
            console.log('shot_processed', msg);
            processingShot(false);
            // startGame(msg.player_1, msg.player_2, msg.game);
        });
        this.props.socket.on('game_ended', function(msg){
            console.log('game_ended', msg);
            // startGame(msg.player_1, msg.player_2, msg.game);
        });
        this.props.socket.on('player_turn', function(msg){
            console.log('player_turn', msg);
            changeTurn(msg.user_id === userId);
        });
    }

    fire(gameId, userId, x, y) {
        this.props.socket.emit('fire', {game_id: gameId, user_id: userId, x: x, y: y});
    }

    onCellClick(x, y) {
        //todo check si ya estaba disparada esa y si el numero es valido breo y si el juego sigue o si ya termino
        if (this.props.isMyTurn && !this.props.isProcessingShot) {
            this.props.processingShot(true);
            this.fire(this.props.gameId, this.props.userId, x - 1, y - 1);
        }
    }

    render() {
        return (
            <div className="page v-container">
                {this.props.isMyTurn ?
                    <p style={{color: "blue"}}>Your turn!</p>
                    :
                    <p style={{color: "blue"}}>Opponent turn. Please wait!</p>
                }
                <div className="h-container">
                    <div className="h-container__col">
                        <Battlefield cells={this.props.ownCells}/>
                    </div>
                    <div className="h-container__col">
                        <Battlefield cells={this.props.opponentCells} onCellClick={this.onCellClick.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}