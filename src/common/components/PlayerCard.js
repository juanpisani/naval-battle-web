import React from "react";
import {Card} from "react-bootstrap";
import "./PlayerCardStyle.css";


export const PlayerCard = (player) => {
    return (<Card className="playerCard">
        <Card.Body>
            <Card.Title className="playerCardTitle">Player</Card.Title>
            <Card.Title className="playerCardTitle">{player.player.name}</Card.Title>
            <Card.Title className="playerCardTitle">{player.player.email}</Card.Title>
        </Card.Body>
    </Card>)
};