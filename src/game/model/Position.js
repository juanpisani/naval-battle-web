class Position {
    x = 0;
    y = 0;
    prevPosition = { x: 0, y: 0 };

    constructor(x, y) {
        this.move(x, y);
    }

    get position() {
        return { x: this.x, y: this.y };
    }

    get key() {
        return `${this.x}:${this.y}`;
    }

    move(x, y) {
        this.prevPosition = { x, y };
        this.x = x;
        this.y = y;
    }

    reset() {
        this.x = this.prevPosition.x;
        this.y = this.prevPosition.y;
    }

    isOnBoard() {
        return this.x > 0 && this.y > 0;
    }
}

export default Position;