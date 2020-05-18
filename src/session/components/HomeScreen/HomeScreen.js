import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import './HomeScreenStyle.css';
import 'bootstrap/dist/css/bootstrap.css';

class HomeScreen extends Component {

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/")
        console.log(this.props)
    }

    handleClick(){
        this.props.history.push("/game")
    }

    render() {
        let {user} = this.props;
        return (<div className="page">
            <div className="homeContainer">
                <div className="titleContainer">
                    <Card className="homeCard">
                        <Card.Body>
                            <Card.Title className="homeCardTitle">Naval battle</Card.Title>
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
