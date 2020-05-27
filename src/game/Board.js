import React, {Component} from "react";
import {Box} from "./Box";
import './GameStyleSheet.css'
import {Piece} from "./Piece";

export class Board extends Component {

    constructor(props) {
        super(props);

        // Initialize component state
        this.state = {
            grid: Array(100).fill(false),
            pieces: [
                {
                    key:0,
                    defaultY: 0,
                    defaultX: 50,
                    pos:[],
                    isRotated: false,
                    length: 4,
                },
                {
                    key:1,
                    defaultY: 50,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 3,

                },
                {
                    key:2,
                    defaultY: 100,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 3,
                },
                {
                    key:3,
                    defaultY: 150,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 2,
                },
                {
                    key:4,
                    defaultY: 200,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 2,
                },
                {
                    key:5,
                    defaultY: 250,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 2,
                },
                {
                    key:6,
                    defaultY: 300,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 1,
                },
                {
                    key:7,
                    defaultY: 350,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 1,
                },
                {
                    key:8,
                    defaultY: 400,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 1,
                },
                {
                    key:9,
                    defaultY: 450,
                    defaultX: 150,
                    pos:[],
                    isRotated: false,
                    length: 1,
                },
            ]
        }
    }

    handleRotate(key){
        this.setState({
            ...this.state,
            pieces: [
                ...this.state.pieces.slice(0,key),
                {
                    ...this.state.pieces[key],
                    isRotated: !this.state.pieces[key].isRotated,
                },
                ...this.state.pieces.slice(key+1)
            ]
        });
    }

    handleStart(key){

    }

    handleStop(key){
        // let piece = this.state.pieces.filter(p => p.key === key)[0];
        // //todo usar la data del stop
        // let newPos = this.calculateNewPos(?)
        //
        // this.setState({
        //         ...this.state,
        //         pieces: [
        //             ...this.state.pieces.slice(0,key),
        //             {
        //                 ...this.state.pieces[key],
        //                 pos: !this.state.pieces[key].isRotated,
        //             },
        //             ...this.state.pieces.slice(key+1)
        //         ]
        //     });
    }

    handleDrag(key){

    }



    render() {

        let i = 0;
        return (
            <div className="board-wrapper">
                {/*grid.map*/}
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
                <div className="board">
                    {/*pieces.map*/}
                    <div style={{position: 'absolute', top:'204px'}}>
                        <Piece length={this.state.pieces[0].length}
                               isRotated={this.state.pieces[0].isRotated}
                               originalX={this.state.pieces[0].defaultX} originalY={this.state.pieces[0].defaultY}
                               bounds={{top: 0, left: -650, right: 0, bottom: 450}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[0].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[0].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[0].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[0].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'254px'}}>
                        <Piece length={this.state.pieces[1].length}
                               isRotated={this.state.pieces[1].isRotated}
                               originalX={this.state.pieces[1].defaultX} originalY={this.state.pieces[1].defaultY}
                               bounds={{top: -50, left: -650, right: 0, bottom: 400}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[1].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[1].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[1].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[1].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'304px'}}>
                        <Piece length={this.state.pieces[2].length}
                                   isRotated={this.state.pieces[2].isRotated}
                                   originalX={this.state.pieces[2].defaultX} originalY={this.state.pieces[2].defaultY}
                                   bounds={{top: -100, left: -650, right: 0, bottom: 350}}
                                   handleStart={this.handleStart.bind(this, this.state.pieces[2].key)}
                                   handleStop={this.handleStop.bind(this, this.state.pieces[2].key)}
                                   handleDrag={this.handleDrag.bind(this, this.state.pieces[2].key)}
                                   rotate={this.handleRotate.bind(this, this.state.pieces[2].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'354px'}}>
                        <Piece length={this.state.pieces[3].length}
                               isRotated={this.state.pieces[3].isRotated}
                               originalX={this.state.pieces[3].defaultX} originalY={this.state.pieces[3].defaultY}
                               bounds={{top: -150, left: -650, right: 0, bottom: 300}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[3].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[3].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[3].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[3].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'404px'}}>
                        <Piece length={this.state.pieces[4].length}
                               isRotated={this.state.pieces[4].isRotated}
                               originalX={this.state.pieces[4].defaultX} originalY={this.state.pieces[4].defaultY}
                               bounds={{top: -200, left: -650, right: 0, bottom: 250}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[4].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[4].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[4].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[4].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'454px'}}>
                        <Piece length={this.state.pieces[5].length}
                               isRotated={this.state.pieces[5].isRotated}
                               originalX={this.state.pieces[5].defaultX} originalY={this.state.pieces[5].defaultY}
                               bounds={{top: -250, left: -650, right: 0, bottom: 200}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[5].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[5].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[5].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[5].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'504px'}}>
                        <Piece length={this.state.pieces[6].length}
                               isRotated={this.state.pieces[6].isRotated}
                               originalX={this.state.pieces[6].defaultX} originalY={this.state.pieces[6].defaultY}
                               bounds={{top: -300, left: -650, right: 0, bottom: 150}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[6].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[6].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[6].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[6].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'554px'}}>
                        <Piece length={this.state.pieces[7].length}
                               isRotated={this.state.pieces[7].isRotated}
                               originalX={this.state.pieces[7].defaultX} originalY={this.state.pieces[7].defaultY}
                               bounds={{top: -350, left: -650, right: 0, bottom: 100}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[7].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[7].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[7].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[7].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'604px'}}>
                        <Piece length={this.state.pieces[8].length}
                               isRotated={this.state.pieces[8].isRotated}
                               originalX={this.state.pieces[8].defaultX} originalY={this.state.pieces[8].defaultY}
                               bounds={{top: -400, left: -650, right: 0, bottom: 50}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[8].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[8].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[8].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[8].key)}
                        />
                    </div>
                    <div style={{position: 'absolute', top:'654px'}}>
                        <Piece length={this.state.pieces[9].length}
                               isRotated={this.state.pieces[9].isRotated}
                               originalX={this.state.pieces[9].defaultX} originalY={this.state.pieces[9].defaultY}
                               bounds={{top: -450, left: -650, right: 0, bottom: 0}}
                               handleStart={this.handleStart.bind(this, this.state.pieces[9].key)}
                               handleStop={this.handleStop.bind(this, this.state.pieces[9].key)}
                               handleDrag={this.handleDrag.bind(this, this.state.pieces[9].key)}
                               rotate={this.handleRotate.bind(this, this.state.pieces[9].key)}
                        />
                    </div>
                </div>
            </div>)
    }
}
