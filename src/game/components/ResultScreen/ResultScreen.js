import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";


class ResultScreen extends Component {

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2E2E2E',
                height: '100vh',
            }}>
                <div style={{width: '80%'}}>
                    <Paper style={{backgroundColor: '#FAE4E4'}} elevation={3}>
                        <div style={{padding: '1%'}}>
                            <Paper style={{backgroundColor: '#2E2E2E', height: '100hv'}} elevation={6}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <h3 style={{
                                        color: '#F3C7C7',
                                        fontFamily: 'Titillium Web',
                                        marginTop: '8px'
                                    }}>BATALLA NAVAL</h3>
                                </div>
                            </Paper>
                        </div>
                    </Paper>
                    <div>
                        <Paper style={{backgroundColor: '#FAE4E4'}} elevation={3}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '30vh',
                            }}>
                                {this.props.isWinner ?
                                    <div>
                                        <h3 style={{
                                            color: '#2E2E2E',
                                            fontFamily: 'Titillium Web',
                                            marginTop: '8px',
                                            textAlign: 'center'
                                        }}>HAS GANADO! </h3>
                                        <h3 style={{
                                            color: '#2E2E2E',
                                            fontFamily: 'Titillium Web',
                                            marginTop: '8px',
                                            textAlign: 'center'
                                        }}>FELICITACIONES ESTIMADO </h3>
                                        <h3 style={{
                                            color: '#2E2E2E',
                                            fontFamily: 'Titillium Web',
                                            marginTop: '8px',
                                            textAlign: 'center'
                                        }}>{this.props.user.name?.toUpperCase()}
                                        </h3>
                                    </div> :
                                    <div>
                                        <h3 style={{
                                            color: '#2E2E2E',
                                            fontFamily: 'Titillium Web',
                                            marginTop: '8px',
                                            textAlign: 'center'
                                        }}>PERDISTE! </h3>
                                        <h3 style={{
                                            color: '#2E2E2E',
                                            fontFamily: 'Titillium Web',
                                            marginTop: '8px',
                                            textAlign: 'center'
                                        }}>NO HAY PROBLEMA, PEOR ES DESCENDER</h3>
                                        <h3 style={{
                                            color: '#2E2E2E',
                                            fontFamily: 'Titillium Web',
                                            marginTop: '8px',
                                            textAlign: 'center'
                                        }}>{this.props.user.name?.toUpperCase()}
                                        </h3>
                                    </div>
                                }
                            </div>
                        </Paper>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '5%'}}>
                        <div style={{backgroundColor: '#FAE4E4', borderRadius: '5%'}}>
                            <Button style={{borderRadius: 50}}
                                    onClick={() => {
                                        this.props.deleteGameRoomAndSocket();
                                        this.props.history.push("/home");
                                    }}>
                                <h3>GO BACK</h3>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default ResultScreen;
