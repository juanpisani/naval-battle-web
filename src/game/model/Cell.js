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

        for (let y = 0; y < 10; ++y) {
            for (let x = 0; x < 10; ++x) {
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

    getBorders(){
        const result = [];
        result.push(
            new Position(this.position.x - 1, this.position.y),
            new Position(this.position.x - 1, this.position.y - 1),
            new Position(this.position.x - 1, this.position.y + 1),
            new Position(this.position.x, this.position.y - 1),
            new Position(this.position.x, this.position.y + 1),
            new Position(this.position.x + 1, this.position.y),
            new Position(this.position.x + 1, this.position.y - 1),
            new Position(this.position.x + 1, this.position.y + 1),
        );
        return result.filter(position => (10 > position.x) && (position.x >= 0) &&
            (10 > position.y) && (position.y >= 0));
    }
}

export default Cell;
