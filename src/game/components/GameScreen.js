import {Component} from "react";
import {Card} from "react-bootstrap";
import React from "react";

export class GameScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
    }

    render() {
        return (
            <div className="page">
                <div className="homeContainer">
                    <div className="titleContainer">
                        <Card className="homeCard">
                            <Card.Body>
                                <Card.Title className="homeCardTitle">
                                    <p style={{color:"blue"}}>Naval battle</p>
                                </Card.Title>
                                {this.props.ownBoard  && this.props.opponentBoard ?
                                    <div>
                                        <Card.Title
                                            className="homeCardTitle">GAME {this.props.roomId}
                                        </Card.Title>
                                        <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                                            <p>READY</p>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                       <p>NOT READY</p>
                                    </div>
                                }
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}