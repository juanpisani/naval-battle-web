import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


class ResultScreen extends Component {

    render() {
        let {user} = this.props;
        return (<div>
            <div>
                <div>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <p style={{color:"blue"}}>Battleship</p>
                            </Card.Title>
                            <Card.Title>Results</Card.Title>
                            <div>
                                {this.props.isWinner ?
                                    <h1 style={{color: "black"}}>CONGRATULATIONS {user.name?.toUpperCase()}, YOU WON</h1>
                                    :
                                    <h1 style={{color: "black"}}>Better luck next time {user.name?.toUpperCase()}, you lost</h1>
                                }
                                <Button variant="light" size="lg" onClick={() => {this.props.deleteGameRoomAndSocket(); this.props.history.push("/home");}}>
                                    <h3 style={{color:"lightskyblue"}}>Back to home</h3>
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
