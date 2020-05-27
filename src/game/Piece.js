import React from "react";
import './GameStyleSheet.css'
import Draggable from 'react-draggable'

export const Piece = (props) => {

    let widthValue = 50 * props.length;

    let style = {
        width: widthValue + 'px',
        height: '50px',
    };

    if (props.isRotated) {
        const oldWidth = style.width;
        style.width = style.height;
        style.height = oldWidth;
    }

    return(
        <Draggable
            axis="both"
            bounds={props.bounds}
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            grid={[50, 50]}
            scale={1}
            onStart={props.handleStart}
            onStop={props.handleStop}
            onDrag={props.handleDrag}

        >
            <div className={"handle"}>
                <div className='piece' style={style} onClick={props.rotate}>
                    {console.log("WIDTH " + style.width)}
                    {console.log("HEIGHT " + style.height)}
                    {console.log("-------------------")}
                </div>
            </div>
        </Draggable>
    )
};