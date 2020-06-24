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
            <div>
                <div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <p style={{color:"blue"}}>BATTLESHIPS</p>
                                </Card.Title>
                                {this.props.ownBoard  && this.props.opponentBoard ?
                                    <div>
                                        <Card.Title>GAME {this.props.roomId}
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