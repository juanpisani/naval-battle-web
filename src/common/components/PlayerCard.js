import React from "react";
import Paper from "@material-ui/core/Paper";


export const PlayerCard = (player) => {
    return (
        <Paper style={{backgroundColor:'#2E2E2E', height:'80%', width: '40%'}} elevation={6}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <h5 style={{
                    color: '#F3C7C7',
                    fontFamily: 'Titillium Web',
                    marginTop: '8px'
                }}>{player.player.name.toUpperCase()}</h5>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <h5 style={{
                    color: '#F3C7C7',
                    fontFamily: 'Titillium Web',
                    marginTop: '8px'
                }}>{player.player.email}</h5>
            </div>
        </Paper>)
};