import {Component} from "react";
import React from "react";
import '../styles/GameStyle.css'
import Battlefield from "../Battlefield";
import {CellStates} from "../../consts/CellStates";

export class GameScreen extends Component {

    componentDidMount() {
        this.props.socket.on('shot_processed', msg => {
            this.props.processingShot(false);
            const [ownCells, opponentCells] = this.analyzeShot(msg.user_shot, msg.x, msg.y, msg.hit, msg.sunken,
                this.props.userId, this.props.ownCells,
                this.props.opponentCells);
            this.props.updateCells(ownCells, opponentCells);
        });
        this.props.socket.on('player_turn', msg => {
            this.props.changeTurn(msg.user_id === this.props.userId);
        });
        this.props.socket.on('game_ended', msg => {
            this.props.isWinner(msg.winner.user_id === this.props.userId);
            this.props.history.push("/results");
        });
        window.addEventListener("beforeunload", ev => {
            this.props.socket.emit("left_room", {game_id: this.props.gameId, user_id: this.props.userId});
        });
    }

    // componentWillUnmount() {
    //     window.removeEventListener("beforeunload")
    // }

    fire(gameId, userId, x, y) {
        this.props.socket.emit('fire', {game_id: gameId, user_id: userId, x: x, y: y});
    }

    randomShot() {
        this.props.socket.emit('random_shot', {game_id: this.props.gameId, user_id: this.props.userId});
    }

    saveChange = (board, changedCell) => {
        const newBoard = new Map();
        for (let entry of board) {
            let cell = entry[1];
            if (cell.x === changedCell.x && cell.y === changedCell.y) {
                newBoard.set(entry[0], changedCell);
            }else {
                newBoard.set(entry[0], cell);
            }
        }
        return newBoard;
    };

    getShip = (board, selectedCell) => {
        let shipPositions = [selectedCell];
        for (const position of selectedCell.getBorders()) {
            const cell = this.getCell(board, position.x, position.y);
            if (cell.state === CellStates.Injured) shipPositions.push(cell);
        }
        return this.getOtherShipParts(board, shipPositions);
    };

    getOtherShipParts = (board, alreadyShipsParts) => {
        let newPositions = [];
        for (const cell of alreadyShipsParts) {
            for (const position of cell.getBorders()) {
                const cell = this.getCell(board, position.x, position.y);
                if (!alreadyShipsParts.includes(cell) && cell.state === CellStates.Injured)
                    newPositions.push(cell);
            }
        }
        if (newPositions.length === 0) return alreadyShipsParts;
        return this.getOtherShipParts(board, alreadyShipsParts.concat(newPositions))
    };

    updateBorders = (board, shipPositions) => {
        const newBoard = board;
        for (const cell of shipPositions) {
            for (const position of cell.getBorders()) {
                const cell = this.getCell(board, position.x, position.y);
                if (!shipPositions.includes(cell)) {
                    cell.state = CellStates.Open;
                    newBoard.set(`${position.x}:${position.y}`, cell);
                }
            }
        }
        return newBoard;
    };


    analyzeShot = (shooterId, x, y, hit, sunken, userId, ownCells, opponentCells) => {
        const isMyShot = userId === shooterId;
        let board = isMyShot ? opponentCells : ownCells;
        let selectedCell = this.getCell(board, x, y);
        selectedCell.state = hit ? CellStates.Injured : CellStates.Open;
        if (isMyShot){
            opponentCells = this.saveChange(opponentCells, selectedCell)
        } else {
            ownCells = this.saveChange(ownCells, selectedCell)
        }
        if (sunken) {
            if(isMyShot){
                const shipPositions = this.getShip(opponentCells, selectedCell);
                opponentCells = this.updateBorders(opponentCells, shipPositions);
            } else {
                const shipPositions = this.getShip(ownCells, selectedCell);
                ownCells = this.updateBorders(ownCells, shipPositions);
            }
        }
        return [ownCells, opponentCells]

    };

    getCell = (board, x, y) => {
        return board.get(`${x}:${y}`)
    };

    checkIfCellIsValid = (selectedCell) => {
        if(selectedCell.isDamaged() || selectedCell.isOpen()) return -1;
    };

    onCellClick(x, y) {
        if (this.props.isMyTurn && !this.props.isProcessingShot) {
            let opponentBoard = this.props.opponentCells;
            let selectedCell = this.getCell(opponentBoard, x, y);
            if (selectedCell === undefined) return;
            if (this.checkIfCellIsValid(selectedCell) === -1) return;
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
                <button onClick={() => this.randomShot()}>Random shot</button>
            </div>
        );
    }
}