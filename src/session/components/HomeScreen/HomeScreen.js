import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import './HomeScreenStyle.css';
import 'bootstrap/dist/css/bootstrap.css';

class HomeScreen extends Component {

    //todo logout
    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/");
    }

    async handleClick() {
        this.props.registerToPlay(this.props.token);
        //todo al hacer el redirect en el middleware no pasarian estas cosas
        this.sleep(500).then(()=> {
            this.props.registerToPlayStatus.success && this.props.history.push("/gameLobby");
        })
    }

    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }


    render() {
        let {user} = this.props;
        return (<div className="page">
            <div className="homeContainer">
                <div className="titleContainer">
                    <Card className="homeCard">
                        <Card.Body>
                            <Card.Title className="homeCardTitle">
                                <p style={{color:"blue"}}>Naval battle</p>
                            </Card.Title>
                            <Card.Title className="homeCardTitle">Home</Card.Title>
                            <div className="margins">
                                <h1 style={{color:"white"}}>WELCOME {user.firstName?.toUpperCase()} {user.lastName?.toUpperCase()}</h1>
                                <Button className="margins" variant="light" size="lg" onClick={() => this.handleClick()}>
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
