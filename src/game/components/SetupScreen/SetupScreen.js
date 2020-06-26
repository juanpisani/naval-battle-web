import React, {Component} from "react";
import DragAndDropCursor from "../../components/DragAndDropCursor";
import Battlefield from "../../components/Battlefield";
import ShipList from "../ShipList";
import Ship from "../../model/Ship";
import Cell from "../../model/Cell";
import '../styles/GameStyle.css'
import {Card} from "react-bootstrap";

export class SetupScreen extends Component {

    state = {
        currentShip: null,
        ships: Ship.generate(),
        cells: Cell.generate()
    };

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
        const history = this.props.history;
        this.props.socket.on('users_boards_received', function (msg) {
            console.log('users_boards_received', msg);
        });
        this.props.socket.on('boards_ready', function (msg) {
            console.log('boards_ready', msg);
            history.push("/game")
        });
    }

    sendBoard(gameId, ships, userId) {
        const board = this.getPositionJson(ships);
        this.props.socket.emit('setup_board', {user_id: userId, game_id: gameId, board: board});
        this.props.gameStarted(this.state.cells, Cell.generate());
    }

    getPositionJson(ships) {
        let board = [];
        ships.forEach((ship) => {
            board.push({'extreme1': ship.getExtreme1(), 'extreme2': ship.getExtreme2()});
        });
        return board
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
        const {cells, ships} = this.state;
        Cell.resetCells(cells);
        Cell.updateCells(cells, ships);
        this.setState({...this.state, cells: cells});
    }

    handleMouseDown = (shipId) => {
        const setCurrentShip = () => {
            const {ships} = this.state;
            for (let i = 0; i < ships.length; ++i) {
                if (ships[i].id === +shipId) {
                    ships[i].move(0, 0);
                    this.setState({ships, currentShip: ships[i]});
                    break;
                }
            }
        };

        setCurrentShip();
    };

    handleMouseUp = (shipId, cellX, cellY) => {
        const {ships, cells} = this.state;

        for (let i = 0; i < ships.length; ++i) {
            if (ships[i].id === shipId) {
                ships[i].move(cellX, cellY);

                if (Ship.isPositionValid(ships[i], cells)) {
                    this.setState({ships, currentShip: null});
                } else {
                    ships[i].reset();
                }

                break;
            }
        }
    };

    handleRotateShip = (ship) => {
        ship.rotate();
        this.setState({currentShip: ship});
    };

    handlePlayClick = () => {
        this.sendBoard(this.props.gameId, this.state.ships, this.props.userId)
    };

    handleRandomSetUp = () => {
        let ships = Ship.generate();
        let cells = Cell.generate();
        ships.forEach(ship => {
            Ship.setPositionRandomly(ship, cells);
            Cell.updateCells(cells, ships);
        });
        this.setState({...this.state, ships: ships, cells: cells})
    };

    render() {
        const {ships, cells, currentShip} = this.state;

        return (

            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <p style={{color: "blue"}}>BATTLESHIPS</p>
                        </Card.Title>
                        <div>
                            <Card.Title>SETUP
                            </Card.Title>
                            <div className="page v-container">
                                <div className="h-container">
                                    <div className="h-container__col">
                                        <Battlefield cells={cells}/>
                                    </div>
                                    <div className="h-container__col">
                                        <ShipList ships={ships}/>
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
                                <button onClick={this.handleRandomSetUp}>Random</button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
