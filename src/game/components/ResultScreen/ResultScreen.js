import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


class ResultScreen extends Component {

    componentWillMount() {
        this.props.socket.on('ready_to_start', msg => {
            this.props.startGame(msg.player_1, msg.player_2, msg.game);
            this.props.history.push("/setPieces");
        });
        this.props.socket.on('rematch_processed', msg => {
            console.log(msg);
        });
    }

    rematch(gameId, userId) {
        this.props.socket.emit('rematch', {user_id: userId, game_id: gameId});
        this.props.deletePreviousGameInfo();
    }

    render() {
        let {user} = this.props;
        return (<div>
            <div>
                <div>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <p style={{color: "blue"}}>Battleship</p>
                            </Card.Title>
                            <Card.Title>Results</Card.Title>
                            <div>
                                {this.props.isWinner ?
                                    <h1 style={{color: "black"}}>CONGRATULATIONS {user.name?.toUpperCase()}, YOU
                                        WON</h1>
                                    :
                                    <h1 style={{color: "black"}}>Better luck next time {user.name?.toUpperCase()}, you
                                        lost</h1>
                                }
                                <Button variant="light" size="lg" onClick={() => {
                                    this.props.deleteGameRoomAndSocket();
                                    this.props.history.push("/home");
                                }}>
                                    <h3 style={{color: "lightskyblue"}}>Back to home</h3>
                                </Button>
                                <Button variant="light" size="lg" onClick={() => {
                                    this.rematch(this.props.gameId, this.props.user.id);
                                }}>
                                    <h3 style={{color: "lightskyblue"}}>Rematch</h3>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>);
    }
}

export default ResultScreen;
