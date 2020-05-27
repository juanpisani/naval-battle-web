import React from "react";
import './GameStyleSheet.css'


export const Piece = (props) => {

    let widthValue = 50 * props.length;

    let style = {
        width: widthValue + 'px',
        height: '50px',
    }

    if (props.isRotated) {
        const oldWidth = style.width;
        style.width = style.height;
        style.height = oldWidth;
    }

    return(
        <div className='piece' style={style}>
            {console.log("WIDTH " + style.width)}
            {console.log("HEIGHT " + style.height)}
            {console.log("-------------------")}
        </div>
    )
};