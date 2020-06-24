import React from "react";
import {Card} from "react-bootstrap";


export const PlayerCard = (player) => {
    return (<Card>
        <Card.Body>
            <Card.Title>Player</Card.Title>
            <Card.Title>{player.player.name}</Card.Title>
            <Card.Title>{player.player.email}</Card.Title>
        </Card.Body>
    </Card>)
};