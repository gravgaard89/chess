export default class Coordinate {
    row: number;
    col: number;

    constructor(col: number, row: number) {
        this.col = col;
        this.row = row;
    }

    /**
     * Compare two coordinates
     */
    public equals(other: Coordinate): boolean {
        return this.row == other.row && this.col == other.col;
    }

    /**
     * Convert the this to board's coordinate
     */
    public getBoardCoordinateRepresentation() {
        const rowLabel = 8 - this.row;
        const colLabel = 8 - this.col;
        return `(${rowLabel + "," + colLabel})`;
    }

    public toString(): string {
        return `(${this.row},${this.col})`;
    }
}
