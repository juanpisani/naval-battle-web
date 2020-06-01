import React from "react";
import Cell from "./Cell";

const Ship = ({ ship, isSelected }) => {
    if (!ship) return null;

    let className = `ship ship--${ship.orient}`;

    if (isSelected) {
        className += " ship--current";
    }

    return (
        <div className={className} data-id={ship.id}>
            {ship.positions().map((i, index) => (
                <Cell
                    key={`${ship.id}-${index}`}
                    shipId={ship.id}
                    isInactive={ship.isOnBoard()}
                />
            ))}
        </div>
    );
};

export default Ship;
