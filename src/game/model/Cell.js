import Position from "./Position";
import {CellStates} from "../consts/CellStates";

class Cell extends Position{
    currentShipId = -1;
    currentState = CellStates.Empty;

    get state() {
        return this.currentState;
    }

    get shipId() {
        return this.currentShipId;
    }

    set state(value) {
        this.currentState = value;
    }

    set shipId(value) {
        this.currentShipId = value;
    }

    isFilled() {
        return this.shipId !== -1;
    }

    isInactive() {
        return this.state === CellStates.Inactive;
    }

    isOpen() {
        return this.state === CellStates.Open;
    }

    isDamaged() {
        return (
            this.state === CellStates.Injured || this.state === CellStates.Destroyed
        );
    }

    static generate = () => {
        const result = new Map();

        for (let y = 1; y < 10 + 1; ++y) {
            for (let x = 1; x < 10 + 1; ++x) {
                result.set(`${x}:${y}`, new Cell(x, y));
            }
        }

        return result;
    };

    static resetCells = (cells) => {
        cells.forEach((cell) => {
            cell.shipId = -1;
            cell.state = CellStates.Empty;
        });
    };

    static updateCells = (cells, ships) => {
        for (let i = 0; i < ships.length; ++i) {
            for (const position of ships[i].positions()) {
                const cell = cells.get(`${position.x}:${position.y}`);

                if (cell) {
                    cell.shipId = ships[i].id;
                }
            }

            for (const position of ships[i].borders()) {
                const cell = cells.get(position.key);

                if (cell) {
                    cell.state = CellStates.Inactive;
                }
            }
        }
    };
}

export default Cell;
