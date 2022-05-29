import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";
import { EnumDeclaration } from "typescript";
import Coordinate from "../Coordinate";
import Piece from "../Piece";
import Square from "../Square";

enum Type {
    // PAWN = "♙",
    // ROOK = "♖",
    // KNIGHT = "♘",
    // BISHOP = "♗",
    // QUEEN = "♕",
    // KING = "♔",

    PAWN = "♟",
    ROOK = "♜",
    KNIGHT = "♞",
    BISHOP = "♝",
    QUEEN = "♛",
    KING = "♚",
}

class BoardStore {
    pieces: Array<Piece>;
    @observable squares: Array<Square>;
    @observable isPressed: boolean;
    @observable selectedSquare: Square;
    @observable possibleMoves: Array<Coordinate>;
    @observable isWhiteTurn: boolean;

    constructor() {
        makeObservable(this);
        this.selectedSquare = new Square(new Coordinate(-1, -1));
        this.possibleMoves = [];
        this.isPressed = false;
        this.pieces = [];
        this.squares = this.squareStartingPositions();
        this.isWhiteTurn = true;
        this.setOnlySquaresWithPiecesToSelectable();
    }

    squareStartingPositions = () => {
        return [
            new Square(new Coordinate(0, 0), false, true, new Piece("Rook", false, false, Type.ROOK)),
            new Square(new Coordinate(1, 0), false, true, new Piece("Knight", false, false, Type.KNIGHT)),
            new Square(new Coordinate(2, 0), false, true, new Piece("Bishop", false, false, Type.BISHOP)),
            new Square(new Coordinate(3, 0), false, true, new Piece("King", false, false, Type.KING)),
            new Square(new Coordinate(4, 0), false, true, new Piece("Queen", false, false, Type.QUEEN)),
            new Square(new Coordinate(5, 0), false, true, new Piece("Bishop", false, false, Type.BISHOP)),
            new Square(new Coordinate(6, 0), false, true, new Piece("Knight", false, false, Type.KNIGHT)),
            new Square(new Coordinate(7, 0), false, true, new Piece("Rook", false, false, Type.ROOK)),
            new Square(new Coordinate(0, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(1, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(2, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(3, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(4, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(5, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(6, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(7, 1), false, true, new Piece("Pawn", false, false, Type.PAWN)),
            new Square(new Coordinate(0, 2)),
            new Square(new Coordinate(1, 2)),
            new Square(new Coordinate(2, 2)),
            new Square(new Coordinate(3, 2)),
            new Square(new Coordinate(4, 2)),
            new Square(new Coordinate(5, 2)),
            new Square(new Coordinate(6, 2)),
            new Square(new Coordinate(7, 2)),
            new Square(new Coordinate(0, 3)),
            new Square(new Coordinate(1, 3)),
            new Square(new Coordinate(2, 3)),
            new Square(new Coordinate(3, 3)),
            new Square(new Coordinate(4, 3)),
            new Square(new Coordinate(5, 3)),
            new Square(new Coordinate(6, 3)),
            new Square(new Coordinate(7, 3)),
            new Square(new Coordinate(0, 4)),
            new Square(new Coordinate(1, 4)),
            new Square(new Coordinate(2, 4)),
            new Square(new Coordinate(3, 4)),
            new Square(new Coordinate(4, 4)),
            new Square(new Coordinate(5, 4)),
            new Square(new Coordinate(6, 4)),
            new Square(new Coordinate(7, 4)),
            new Square(new Coordinate(0, 5)),
            new Square(new Coordinate(1, 5)),
            new Square(new Coordinate(2, 5)),
            new Square(new Coordinate(3, 5)),
            new Square(new Coordinate(4, 5)),
            new Square(new Coordinate(5, 5)),
            new Square(new Coordinate(6, 5)),
            new Square(new Coordinate(7, 5)),
            new Square(new Coordinate(0, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(1, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(2, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(3, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(4, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(5, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(6, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(7, 6), false, true, new Piece("Pawn", false, true, Type.PAWN)),
            new Square(new Coordinate(0, 7), false, true, new Piece("Rook", false, true, Type.ROOK)),
            new Square(new Coordinate(1, 7), false, true, new Piece("Knight", false, true, Type.KNIGHT)),
            new Square(new Coordinate(2, 7), false, true, new Piece("Bishop", false, true, Type.BISHOP)),
            new Square(new Coordinate(3, 7), false, true, new Piece("King", false, true, Type.KING)),
            new Square(new Coordinate(4, 7), false, true, new Piece("Queen", false, true, Type.QUEEN)),
            new Square(new Coordinate(5, 7), false, true, new Piece("Bishop", false, true, Type.BISHOP)),
            new Square(new Coordinate(6, 7), false, true, new Piece("Knight", false, true, Type.KNIGHT)),
            new Square(new Coordinate(7, 7), false, true, new Piece("Rook", false, true, Type.ROOK)),
        ];
    };

    handleClickedSquare(s: Square) {

        if (this.sameCoordinates(s.coordinate, this.selectedSquare.coordinate)) {
            this.selectedSquare.isSelected = false;
            this.selectedSquare = new Square(new Coordinate(-1, -1));
            this.setOnlySquaresWithPiecesToSelectable();
        } else {
            const canSetSelectedSquareAndMoves = (s.piece && s.piece.isWhite && this.isWhiteTurn) || (s.piece && !s.piece.isWhite && !this.isWhiteTurn);

            if (canSetSelectedSquareAndMoves) {
                s.isSelected = !s.isSelected;
                this.selectedSquare = s;
                this.setPossibleMoves();
            } else {
                s.piece = this.selectedSquare.piece;
                const oldSquare = this.squares.find((x) => x.coordinate.toString() == this.selectedSquare.coordinate.toString());

                if (oldSquare) {
                    oldSquare.piece = undefined;
                    oldSquare.isSelected = false;
                }

                this.changeTurn();
            }

            if (this.squares.every(x => !x.isSelectable)) {
                alert(`No moves for ${s.piece?.isWhite ? "white" : "black"} ${s.piece?.name.toLocaleLowerCase()}`);
                s.isSelected = !s.isSelected;
                this.selectedSquare = new Square(new Coordinate(-1, -1));
                this.setOnlySquaresWithPiecesToSelectable();
            }

        }
        this.toggleToUpdateView();
    }

    changeTurn = () => {
        this.isWhiteTurn = !this.isWhiteTurn;
        this.setOnlySquaresWithPiecesToSelectable();
    };

    setOnlySquaresWithPiecesToSelectable = () => {
        this.squares.forEach((element) => {
            if ((element.piece && element.piece?.isWhite && this.isWhiteTurn) || (element.piece && !element.piece.isWhite && !this.isWhiteTurn)) {
                element.isSelectable = true;
            } else {
                element.isSelectable = false;
            }
        });
    };

    reset = () => {
        this.squares = this.squareStartingPositions();
        this.toggleToUpdateView();
        this.isWhiteTurn = true;
        this.setOnlySquaresWithPiecesToSelectable();
    };

    @action toggleToUpdateView = () => {
        this.isPressed = !this.isPressed;
    };

    @action setPossibleMoves = () => {
        this.possibleMoves = [];
        this.squares.forEach((element) => {
            element.isSelectable = false;
        });
        if (this.selectedSquare.piece) {
            let relativeMoves = Array<Coordinate>();
            if (this.selectedSquare.piece.type == Type.PAWN) {
                relativeMoves = this.getPawnMoves();
            } else if (this.selectedSquare.piece.type == Type.ROOK) {
                relativeMoves = this.getStraightMoves();
            } else if (this.selectedSquare.piece.type == Type.BISHOP) {
                relativeMoves = this.getDiagonalMoves();
            } else if (this.selectedSquare.piece.type == Type.QUEEN) {
                relativeMoves = [...this.getStraightMoves(), ...this.getDiagonalMoves()];
            } else {
                relativeMoves = this.selectedSquare.piece.relativeMoves();
            }

            this.possibleMoves = relativeMoves.map((x) => {
                return new Coordinate(this.selectedSquare.coordinate.col + x.col, this.selectedSquare.coordinate.row + x.row);
            });

            const selectableSquares = this.squares.filter((x) => this.possibleMoves.some((y) => y.toString() == x.coordinate.toString()));
            const selectableSquaresExceptFriendSquares = selectableSquares.filter((x) => (x.piece && x.piece.isWhite == !this.selectedSquare.piece?.isWhite) || !x.piece);


            selectableSquaresExceptFriendSquares.forEach((element) => {
                element.isSelectable = true;
            });
        }
    };

    pieceAtPosition = (col: number, row: number) => {
        const square = this.squares.find(x => x.coordinate.col == col && x.coordinate.row == row);
        return square?.piece ? true : false;
    }

    getStraightMoves = () => {
        let straightMoves = new Array<Coordinate>();
        //Moving North
        for (let i = 1; i < 8; i++) {
            straightMoves.push(new Coordinate(0, -i));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col, this.selectedSquare?.coordinate.row - i)) {
                break;
            }
        }

        //Moving East
        for (let i = 1; i < 8; i++) {
            straightMoves.push(new Coordinate(i, 0));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col + i, this.selectedSquare?.coordinate.row)) {
                break;
            }
        }

        //Moving South
        for (let i = 1; i < 8; i++) {
            straightMoves.push(new Coordinate(0, i));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col, this.selectedSquare?.coordinate.row + i)) {
                break;
            }
        }

        //Moving West
        for (let i = 1; i < 8; i++) {
            straightMoves.push(new Coordinate(-i, 0));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col - i, this.selectedSquare?.coordinate.row)) {
                break;
            }
        }

        return straightMoves;
    }

    getDiagonalMoves = () => {
        let diagonalMoves = new Array<Coordinate>();

        //Moving Nort-hwest
        for (let i = 1; i < 8; i++) {
            diagonalMoves.push(new Coordinate(-i, -i));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col - i, this.selectedSquare?.coordinate.row - i)) {
                break;
            }
        }

        //Moving North-east
        for (let i = 1; i < 8; i++) {
            diagonalMoves.push(new Coordinate(i, -i));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col + i, this.selectedSquare?.coordinate.row - i)) {
                break;
            }
        }

        //Moving South-east
        for (let i = 1; i < 8; i++) {
            diagonalMoves.push(new Coordinate(i, i));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col + i, this.selectedSquare?.coordinate.row + i)) {
                break;
            }
        }

        //Moving South-west
        for (let i = 1; i < 8; i++) {
            diagonalMoves.push(new Coordinate(-i, i));
            if (this.pieceAtPosition(this.selectedSquare.coordinate.col - i, this.selectedSquare?.coordinate.row + i)) {
                break;
            }
        }

        return diagonalMoves;
    }

    getPawnMoves = () => {
        const pawnPiece = this.selectedSquare.piece;
        let moves = new Array<Coordinate>();
        const inFront = pawnPiece?.isWhite ? -1 : 1;

        //Linear moves
        const pieceInFront = this.pieceAtPosition(this.selectedSquare.coordinate.col, this.selectedSquare?.coordinate.row + inFront);
        if (!pieceInFront) {
            if (pawnPiece?.isWhite == true) {
                if (pawnPiece.hasMoved) {
                    moves.push(new Coordinate(0, -1));
                } else {
                    pawnPiece.hasMoved = true;
                    moves.push(new Coordinate(0, -1));
                    moves.push(new Coordinate(0, -2));
                }
            }
            if (pawnPiece?.isWhite == false) {
                if (pawnPiece.hasMoved) {
                    moves.push(new Coordinate(0, 1));
                } else {
                    pawnPiece.hasMoved = true;
                    moves.push(new Coordinate(0, 1));
                    moves.push(new Coordinate(0, 2));
                }
            }
        }

        // Attacking moves
        if (this.pieceAtPosition(this.selectedSquare.coordinate.col + 1, this.selectedSquare?.coordinate.row + inFront)) {
            moves.push(new Coordinate(1, inFront));
        }
        if (this.pieceAtPosition(this.selectedSquare.coordinate.col - 1, this.selectedSquare?.coordinate.row + inFront)) {
            moves.push(new Coordinate(-1, inFront));
        }


        return moves;
    }

    sameCoordinates(c1: Coordinate, c2: Coordinate) {
        return c1.col == c2.col && c1.row == c2.row;
    }
}

const boardStore = new BoardStore();

export { boardStore, Type };
