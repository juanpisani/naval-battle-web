import React from "react";
import Cell from "./Cell";

const Battlefield = ({cells, hidden, onCellClick }) => {
    return (
        <div className="board">
            {Array.from(cells.values()).map((cell) => (
                <Cell
                    key={cell.key}
                    className="field"
                    hidden={hidden}
                    x={cell.position.x}
                    y={cell.position.y}
                    shipId={cell.shipId}
                    onClick={onCellClick}
                    isDamaged={cell.isDamaged()}
                    isInactive={cell.isInactive()}
                    isOpen={cell.isOpen()}
                />
            ))}
        </div>
    );
};

export default Battlefield;