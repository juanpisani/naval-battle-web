import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import config from "../../../config";
import io from 'socket.io-client';


class HomeScreen extends Component {

    //todo logout
    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
    }

    async handleClick() {
        const user_id = this.props.user.id;
        const socket = io(config.API_PATH);
        const saveSocketInReducer = this.props.saveSocketInReducer;
        const history = this.props.history;
        socket.on('connect', function() {
            saveSocketInReducer(this);
            socket.emit('connect_player', {user_id: user_id});
        });
        socket.on('connected_player', function(msg){
            console.log('connected_player', msg);
            history.push("/gameLobby");
        });
        // socket.on('ready_to_start', function(msg){
        //     console.log('ready_to_start', msg);
        // });
    }

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
                            <Card.Title>Home</Card.Title>
                            <div>
                                <h1 style={{color:"white"}}>WELCOME {user.name?.toUpperCase()}</h1>
                                <Button variant="light" size="lg" onClick={() => this.handleClick()}>
                                    <h3 style={{color:"lightskyblue"}}>PLAY</h3>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>);
    }
}

export default HomeScreen;
