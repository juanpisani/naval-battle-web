import React, {Component} from "react";
import {Card} from "react-bootstrap";
import './LoginScreenStyle.css';
import GoogleLogin from "react-google-login";
import 'bootstrap/dist/css/bootstrap.css';

class LoginScreen extends Component {

    successLogin = (response) => {
        this.props.successLogin(response);
        this.props.loginStatus.success && this.props.history.push('/Home')
    };

    errorLogin = () => {
        this.props.errorLogin();
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        nextProps.user && this.props.history.push('/Home')
    }

    render() {

        let {loginStatus} = this.props;
        return (<div className="page">
            <div className="homeContainer">
                <div className="titleContainer">
                    <Card className="homeCard">
                        <Card.Body>
                            <Card.Title className="homeCardTitle">
                                <p style={{color:"blue"}}>Battleship</p>
                            </Card.Title>
                            <div className="googleButton">
                                <GoogleLogin
                                    clientId="168742262050-ojjs8no69pmvclfjmc1h110drusu7gf7.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={(response) => this.successLogin(response)}
                                    onFailure={() => this.errorLogin()}>
                                </GoogleLogin>
                                {loginStatus.error && <p>Login failed</p>}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>);
    }
}

export default LoginScreen;
