import React, {Component} from "react";
import GoogleLogin from "react-google-login";
import Paper from "@material-ui/core/Paper";

class LoginScreen extends Component {

    successLogin = (response) => {
        this.props.successLogin(response);
        this.props.loginStatus.success && this.props.history.push('/home')
    };

    errorLogin = () => {
        this.props.errorLogin();
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        nextProps.user && this.props.history.push('/home')
    }

    render() {

        let {loginStatus} = this.props;
        return (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',  backgroundColor: '#2E2E2E', height: '100vh'}}>
                <div style={{width:'80%'}}>
                    <Paper style={{backgroundColor:'#FAE4E4'}} elevation={3}>
                        <div style={{padding:'1%'}}>
                            <Paper style={{backgroundColor:'#2E2E2E', height:'100hv'}} elevation={6}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <h3 style={{
                                        color: '#F3C7C7',
                                        fontFamily: 'Titillium Web',
                                        marginTop: '8px'
                                    }}>BATTLESHIP</h3>
                                </div>
                            </Paper>
                            <div style={{alignItems: 'center', display:'flex', justifyContent: 'center', paddingTop: '3%'}}>
                                <GoogleLogin
                                    clientId='168742262050-ojjs8no69pmvclfjmc1h110drusu7gf7.apps.googleusercontent.com'
                                    buttonText='Login with Google'
                                    onSuccess={(response) => this.successLogin(response)}
                                    onFailure={(error) => {console.log(error); this.errorLogin();}}>
                                </GoogleLogin>
                                {loginStatus.error && <p>Login failed</p>}
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default LoginScreen;
