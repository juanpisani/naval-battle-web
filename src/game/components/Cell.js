import React from "react";

const Cell = ({
                  className,
                  hidden,
                  x,
                  y,
                  shipId,
                  onClick,
                  isDamaged,
                  isInactive,
                  isOpen
              }) => {
    let cellClass = "cell";

    if (className) {
        cellClass = `${cellClass} ${className}`;
    }

    if (shipId > -1 && !hidden) {
        cellClass = `${cellClass} cell--ship`;
    }

    if (isDamaged) {
        cellClass = `${cellClass} cell--damaged`;
    }

    if (!hidden && isInactive) {
        cellClass = `${cellClass} cell--inactive`;
    }

    if (isOpen) {
        cellClass = `${cellClass} cell--open`;
    }

    const handleOnClick = () => {
        if (onClick) {
            onClick(x, y);
        }
    };

    return (
        <div
            className={cellClass}
            data-x={x}
            data-y={y}
            data-shipid={shipId}
            onClick={handleOnClick}
        />
    );
};

export default Cell;
