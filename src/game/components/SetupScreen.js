import React, { Component } from "react";
import DragAndDropCursor from "../components/DragAndDropCursor";
import Battlefield from "../components/Battlefield";
import ShipList from "./ShipList";
import Ship from "../model/Ship";
import Cell from "../model/Cell";
import './styles/GameStyle.css'
import {Card} from "react-bootstrap";
import WebSocketInstance from "../../socket/socket";

export class SetupScreen extends Component {
    state = {
        currentShip: null,
        ships: Ship.generate(),
        cells: Cell.generate()
    };

    constructor(props) {
        super(props);
        WebSocketInstance.connect(this.props.roomId);
        this.waitForSocketConnection(() => {
            WebSocketInstance.sendMessageConnected(this.props.roomId, this.props.user.id);
            WebSocketInstance.addCallbacks(this.waitingCallBack.bind(this));
        });
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

    sendBoard(ships, userId){
        // todo send message
        //command    boards
        //     {
        //         "userId": 12,
        //         "board": [
        //             {"extreme1": "A1", "extreme2": "A4"},
        //             {"extreme1": "C5", "extreme2": "F5"},
        //             {"extreme1": "B6", "extreme2": "B9"}
        //          ]
        //     }
        const board = this.getPositionJson(ships);
        this.props.sendBoard(board, userId);
        console.log("BOARD SENT")
    }

    getPositionJson(ships) {
        let board = [];
        ships.forEach((ship) => {
            board.push({'extreme1': ship.getExtreme1(), 'extreme2': ship.getExtreme2()})
        })
    }

    waitingCallBack(){
        this.console.log("WAITING")
    }

    componentDidMount() {
        this.updateCells();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentShip !== null && this.state.currentShip === null) {
            this.updateCells();
        } else if (prevState.currentShip !== this.state.currentShip) {
            this.updateCells();
        }
    }

    get isReadyToPlay() {
        return this.state.ships.filter((i) => i.isOnBoard()).length === 10;
    }

    updateCells() {
        const { cells, ships } = this.state;
        Cell.resetCells(cells);
        Cell.updateCells(cells, ships);
        this.setState({ cells });
    }

    handleMouseDown = (shipId) => {
        const setCurrentShip = () => {
            const { ships } = this.state;
            for (let i = 0; i < ships.length; ++i) {
                if (ships[i].id === +shipId) {
                    ships[i].move(0, 0);
                    this.setState({ ships, currentShip: ships[i] });
                    break;
                }
            }
        };

        setCurrentShip();
    };

    handleMouseUp = (shipId, cellX, cellY) => {
        const { ships, cells } = this.state;

        for (let i = 0; i < ships.length; ++i) {
            if (ships[i].id === shipId) {
                ships[i].move(cellX, cellY);

                if (Ship.isPositionValid(ships[i], cells)) {
                    this.setState({ ships, currentShip: null });
                } else {
                    ships[i].reset();
                }

                break;
            }
        }
    };

    handleRotateShip = (ship) => {
        ship.rotate();
        this.setState({ currentShip: ship });
    };

    handlePlayClick = () => {
        this.sendBoard(this.state.ships)
    };

    render() {
        const { ships, cells, currentShip } = this.state;

        return (

            <div className="page">
                <div className="homeContainer">
                    <div className="titleContainer">
                        <Card className="homeCard">
                            <Card.Body>
                                <Card.Title className="homeCardTitle">
                                    <p style={{color:"blue"}}>Naval battle</p>
                                </Card.Title>
                                    <div>
                                        <Card.Title
                                            className="homeCardTitle">SETUP
                                        </Card.Title>
                                        <div className="page v-container">
                                            <div className="h-container">
                                                <div className="h-container__col">
                                                    <Battlefield cells={cells} />
                                                </div>

                                                <div className="h-container__col">
                                                    <ShipList ships={ships} />

                                                    <ul className="brief">
                                                        <li>
                                                            <b>move</b> - drag and drop
                                                        </li>
                                                        <li>
                                                            <b>rotate</b> - select and press space
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                {this.isReadyToPlay && (
                                                    <button onClick={this.handlePlayClick}>Battle!</button>
                                                )}
                                            </div>
                                            <DragAndDropCursor
                                                currentShip={currentShip}
                                                onMouseDown={this.handleMouseDown}
                                                onMouseUp={this.handleMouseUp}
                                                onRotateShip={this.handleRotateShip}
                                            />
                                        </div>
                                    </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/*todo poner timer y hacer redirect a /game */}
                </div>
            </div>
        );
    }
}