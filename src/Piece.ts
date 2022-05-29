import Coordinate from "./Coordinate";
import { Type } from "./store/BoardStore";

export default class Piece {
    public name: string;
    public hasMoved: boolean;
    public isWhite: boolean;
    public type: string;
    public value: number;

    constructor(name: string, hasMoved: boolean, isWhite: boolean, type: string) {
        this.name = name;
        this.hasMoved = hasMoved;
        this.isWhite = isWhite;
        this.type = type;

        if (type == Type.PAWN) {
            this.value = 1;
        } else if (type == Type.ROOK) {
            this.value = 5;
        } else if (type == Type.KNIGHT) {
            this.value = 3;
        } else if (type == Type.ROOK || type == Type.ROOK) {
            this.value = 3;
        } else if (type == Type.QUEEN) {
            this.value = 9;
        } else {
            this.value = 0;
        }
    }

    public relativeMoves() {
        if (this.type == Type.PAWN && this.isWhite == true) {
            if (this.hasMoved) {
                return [new Coordinate(0, -1)];
            } else {
                this.hasMoved = true;
                return [new Coordinate(0, -1), new Coordinate(0, -2)];
            }
        }
        if (this.type == Type.PAWN && this.isWhite == false) {
            if (this.hasMoved) {
                return [new Coordinate(0, 1)];
            } else {
                this.hasMoved = true;
                return [new Coordinate(0, 1), new Coordinate(0, 2)];
            }
        }
        if (this.type == Type.KNIGHT) {
            return [
                new Coordinate(-1, -2),
                new Coordinate(1, -2),
                new Coordinate(2, -1),
                new Coordinate(2, 1),
                new Coordinate(1, 2),
                new Coordinate(-1, 2),
                new Coordinate(-2, 1),
                new Coordinate(-2, -1),
            ];
        }
        if (this.type == Type.BISHOP) {
            let coordinates = Array<Coordinate>();
            for (let i = 1; i < 7; i++) {
                coordinates.push(new Coordinate(i, i));
                coordinates.push(new Coordinate(-i, -i));
                coordinates.push(new Coordinate(-i, i));
                coordinates.push(new Coordinate(i, -i));
            }
            return coordinates;
        }
        if (this.type == Type.ROOK) {
            let coordinates = Array<Coordinate>();
            for (let i = 1; i < 7; i++) {
                coordinates.push(new Coordinate(0, i));
                coordinates.push(new Coordinate(0, -i));
                coordinates.push(new Coordinate(i, 0));
                coordinates.push(new Coordinate(-i, 0));
            }
            return coordinates;
        }
        if (this.type == Type.QUEEN) {
            let coordinates = Array<Coordinate>();
            for (let i = 1; i < 8; i++) {
                coordinates.push(new Coordinate(i, i));
                coordinates.push(new Coordinate(-i, -i));
                coordinates.push(new Coordinate(-i, i));
                coordinates.push(new Coordinate(i, -i));
                coordinates.push(new Coordinate(0, i));
                coordinates.push(new Coordinate(0, -i));
                coordinates.push(new Coordinate(i, 0));
                coordinates.push(new Coordinate(-i, 0));
            }
            return coordinates;
        }
        if (this.type == Type.KING) {
            return [
                new Coordinate(1, -1),
                new Coordinate(1, 0),
                new Coordinate(1, 1),
                new Coordinate(0, 1),
                new Coordinate(-1, 1),
                new Coordinate(-1, 0),
                new Coordinate(-1, -1),
                new Coordinate(0, -1),
            ];
        }
        return [];
    }
}
