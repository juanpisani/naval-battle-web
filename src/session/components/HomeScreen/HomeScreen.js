import React, {Component} from "react";
import {Card} from "react-bootstrap";
import './LoginScreenStyle.css';

class HomeScreen extends Component {

    componentWillMount() {
        !this.props.isLoggedIn && this.props.history.push("/")
    }

    render() {
        let {user} = this.props;
        console.log(user.firstName);
        return (<div className="page">
            <div className="homeContainer">
                <div className="titleContainer">
                    <Card className="homeCard">
                        <Card.Body>
                            <Card.Title className="homeCardTitle">Naval battle</Card.Title>
                            <Card.Title className="homeCardTitle">Home</Card.Title>
                            <div className="googleButton">
                                <p>Welcome {user.firstName} {user.lastName}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>);
    }
}

export default HomeScreen;
