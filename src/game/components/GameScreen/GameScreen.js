import {Component} from "react";
import React from "react";
import '../styles/GameStyle.css'
import Battlefield from "../Battlefield";


export class GameScreen extends Component {

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
        // const history = this.props.history;
        // const startGame = this.props.startGame;
        // this.props.socket.on('ready_to_start', function(msg){
        //     console.log('ready_to_start', msg);
        //     startGame(msg.player_1, msg.player_2, msg.game);
        // });
    }

    // readyToPlay(userId, gameId) {
    //     this.props.socket.emit('join_room', {user_id: userId, game_id: gameId});
    // }

    render() {
        return (
            <div className="page v-container">
                <div className="h-container">
                    <div className="h-container__col">
                        <Battlefield cells={this.props.ownCells}/>
                    </div>
                    <div className="h-container__col">
                        <Battlefield cells={this.props.opponentCells}/>
                    </div>
                </div>
            </div>
        );
    }
}