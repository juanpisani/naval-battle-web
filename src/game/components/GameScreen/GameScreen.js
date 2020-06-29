import {Component} from "react";
import React from "react";
import '../styles/GameStyle.css'
import Battlefield from "../Battlefield";
import {CellStates} from "../../consts/CellStates";

export class GameScreen extends Component {

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
        // const history = this.props.history;
        const analyzeShot = this.analyzeShot;
        const processingShot = this.props.processingShot;
        const changeTurn = this.props.changeTurn;
        const userId = this.props.userId;
        const ownCells = this.props.ownCells;
        const opponentCells = this.props.opponentCells;
        const getCell = this.getCell;
        const updateCells = this.props.updateCells;
        this.props.socket.on('shot_processed', function(msg){
            console.log('shot_processed', msg);
            processingShot(false);
            analyzeShot(msg.user_shot, msg.x, msg.y, msg.hit, msg.sunken, userId, ownCells,
                opponentCells, getCell, updateCells)
        });
        this.props.socket.on('game_ended', function(msg){
            console.log('game_ended', msg);
        });
        this.props.socket.on('player_turn', function(msg){
            changeTurn(msg.user_id === userId);
        });
    }

    fire(gameId, userId, x, y) {
        this.props.socket.emit('fire', {game_id: gameId, user_id: userId, x: x, y: y});
    }

    analyzeShot(shooterId, x, y, hit, sunken, userId, ownCells, opponentCells, getCell, updateCells) {
        let board = userId === shooterId ? opponentCells : ownCells;
        let selectedCell = getCell(board, x, y);
        // if (sunken) todo inhabilitar los alrededores
        debugger
        if (hit) selectedCell.state = CellStates.Injured;
        else selectedCell.state = CellStates.Open;
        // selectedCell.state = CellStates.Destroyed;
        updateCells(ownCells, opponentCells)
    }

    getCell(board, x, y) {
        debugger
        let selectedCell;
        board.forEach(cell => {
            if (cell.x === x && cell.y === y) {
                selectedCell = cell;
            }
        });
        return selectedCell;
    }

    static checkIfCellIsValid(selectedCell) {
        debugger
        if(selectedCell.isDamaged() || selectedCell.isOpen())
            return -1;
        }

    onCellClick(x, y) {
        //todo check si ya estaba disparada esa y si el numero es valido breo y si el juego sigue o si ya termino
        if (this.props.isMyTurn && !this.props.isProcessingShot) {
            let opponentBoard = this.props.opponentCells;
            let selectedCell = this.getCell(opponentBoard, x, y);
            if (GameScreen.checkIfCellIsValid(selectedCell) === -1) return;
            this.props.processingShot(true);
            this.fire(this.props.gameId, this.props.userId, x, y);
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