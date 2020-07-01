import React, {Component} from "react";
import DragAndDropCursor from "../../components/DragAndDropCursor";
import Battlefield from "../../components/Battlefield";
import ShipList from "../ShipList";
import Ship from "../../model/Ship";
import Cell from "../../model/Cell";
import '../styles/GameStyle.css'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export class SetupScreen extends Component {

    state = {
        currentShip: null,
        ships: Ship.generate(),
        cells: Cell.generate()
    };

    componentWillMount() {
        this.props.socket.on('users_boards_received', msg => {
            console.log('users_boards_received', msg);
        });
        this.props.socket.on('boards_ready', msg => {
            this.props.history.push("/game")
        });
        this.props.socket.on('game_ended', msg => {
            this.props.isWinner(msg.winner.user_id === this.props.userId);
            this.props.history.push("/results");
        });
        window.addEventListener("beforeunload", ev => {
            this.props.socket.emit("left_room", {game_id: this.props.gameId, user_id: this.props.userId});
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
                    ships[i].move(-1, -1);
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
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2E2E2E',
                height: '100vh'
            }}>
                <div style={{width: '80%'}}>
                    <Paper style={{backgroundColor: '#FAE4E4', minWidth: '800px'}} elevation={3}>
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
                        <Paper style={{backgroundColor: '#FAE4E4', minWidth: '800px'}} elevation={3}>
                            <div style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div className="page v-container">
                                    <div className="h-container">
                                        <div className="h-container__col">
                                            <Battlefield cells={cells}/>
                                        </div>
                                        <div className="h-container__col">
                                            <ShipList ships={ships}/>
                                        </div>
                                    </div>
                                    <DragAndDropCursor
                                        currentShip={currentShip}
                                        onMouseDown={this.handleMouseDown}
                                        onMouseUp={this.handleMouseUp}
                                        onRotateShip={this.handleRotateShip}
                                    />
                                    <div style={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Button style={{borderRadius: 20, backgroundColor: '#2E2E2E', marginRight: '20%'}}
                                                onClick={this.handleRandomSetUp}>
                                            <h3 style={{
                                                color: '#F3C7C7',
                                                fontFamily: 'Titillium Web',
                                                marginTop: '8px'}}>
                                                ALEATORIO!
                                            </h3>
                                        </Button>
                                        {this.isReadyToPlay && (
                                            <Button style={{borderRadius: 20, backgroundColor: '#2E2E2E'}}
                                                    onClick={this.handlePlayClick}>
                                                <h3 style={{
                                                    color: '#F3C7C7',
                                                    fontFamily: 'Titillium Web',
                                                    marginTop: '8px'}}>
                                                    BATALLA!
                                                </h3>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>);
    }
}
