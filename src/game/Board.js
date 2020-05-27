import React, {Component} from "react";
import {Box} from "./Box";
import './GameStyleSheet.css'
import {Piece} from "./Piece";

export class Board extends Component {

    constructor(props) {
        super(props)
        // Initialize component state
        this.state = {
            grid: Array(100).fill(false),
        }
    }

    render() {

        let i = 0;
        return (
            <div className="board-wrapper">
                <div className="board">
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                    <div className="board-row">
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                        <Box value={this.state.grid[i++]}/>
                    </div>
                </div>

                <div className="board" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingTop: '10%',
                    paddingRight: '5%',
                    flexWrap: 'wrap',
                }}>
                    <Piece length={4} isRotated={false}/>
                    <Piece length={3} isRotated={false}/>
                    <Piece length={3} isRotated={false}/>
                    <Piece length={2} isRotated={false}/>
                    <Piece length={2} isRotated={false}/>
                    <Piece length={2} isRotated={false}/>
                    <Piece length={1} isRotated={false}/>
                    <Piece length={1} isRotated={false}/>
                    <Piece length={1} isRotated={false}/>
                    <Piece length={1} isRotated={false}/>
                </div>

                </div>)
    }
}
