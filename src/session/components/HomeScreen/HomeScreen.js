import React, {Component} from "react";
import config from "../../../config";
import io from 'socket.io-client';
import {PieChart} from 'react-minimal-pie-chart';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {PlayerCard} from "../../../common/components/PlayerCard";


class HomeScreen extends Component {

    componentWillMount() {
        this.props.getMyStatsRequest();
    }

    async handleClick() {
        debugger;
        const user_id = this.props.user.id;
        const socket = io(config.API_PATH);
        const saveSocketInReducer = this.props.saveSocketInReducer;
        socket.on('connect', function () {
            saveSocketInReducer(this);
            socket.emit('connect_player', {user_id: user_id});
        });
        socket.on('connected_player', msg => {
            this.props.history.push("/gameLobby");
        });
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2E2E2E',
                height: '100vh'
            }}>
                <div style={{width: '80%'}}>
                    <Paper style={{backgroundColor: '#FAE4E4'}} elevation={3}>
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
                                }}>BATALLA NAVAL</h3>
                            </div>
                        </Paper>
                        </div>
                    </Paper>
                    <div>
                        <Paper style={{backgroundColor: '#FAE4E4'}} elevation={3}>
                            {
                                this.props.stats.wins > 0 || this.props.stats.loses > 0 ?
                                    (<div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center',
                                        marginTop: '5%', padding: '5%'}}>
                                        <PlayerCard player={this.props.user}/>
                                        <div style={{width: "20%", height: "20%"}}>
                                            <PieChart
                                                data={[
                                                    {value: this.props.stats.wins, color: '#3A7C37', label: "Wins",},
                                                    {value: this.props.stats.loses, color: '#C43838', label: "Loses"},
                                                ]}
                                                totalValue={this.props.stats.wins + this.props.stats.loses}
                                                label={({dataEntry}) => dataEntry.value > 0 ? dataEntry.label + ": " + dataEntry.value : ""}
                                                labelStyle={{
                                                    fontFamily: 'Titillium Web',
                                                    fontSize: '12px',
                                                }}
                                            />
                                        </div>
                                    </div>)
                                    :
                                    (<div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center',
                                        marginTop: '5%', padding: '5%'}}>
                                        <PlayerCard player={this.props.user}/>
                                    </div>)
                            }
                        </Paper>
                    </div>
                    <div style={{display:'flex', justifyContent: 'space-between', marginTop: '5%'}}>
                        <div style={{backgroundColor: '#FAE4E4', borderRadius: '5%'}}>
                            <Button style={{ borderRadius: 50 }} onClick={() => {
                                this.props.logout();
                                this.props.history.push("/");
                            }}>
                                <h3>Logout</h3>
                            </Button>
                        </div>
                        <div style={{backgroundColor: '#FAE4E4', borderRadius: '5%'}}>
                            <Button onClick={() => this.handleClick()}>
                                <h3>PLAY</h3>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default HomeScreen;
