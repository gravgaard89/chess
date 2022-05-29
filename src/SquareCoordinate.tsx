import { action } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import Square from "./Square";
import { boardStore } from "./store/BoardStore";

enum Color {
    Pale = "#edecd4",
    Green = "#7d945d",
    Yellow = "#f7f594",
}

interface ISquareCoordinate {
    square: Square;
    isPressed: boolean;
}

@observer
export default class SquareCoordinate extends React.Component<ISquareCoordinate, any> {
    @action handleClick = (square: Square) => {
        boardStore.handleClickedSquare(square);
    };


    render() {
        const { square } = this.props;

        const { isSelected, coordinate } = square;

        let squareColor = "";

        if (square.isSelectable) {
            squareColor = Color.Yellow;
        }
        const coordinateSum = coordinate.col + coordinate.row;
        let isEvenCoordinate = coordinateSum % 2 == 0

        squareColor = isEvenCoordinate ? Color.Pale : Color.Green;


        if (isSelected) {
            squareColor = Color.Yellow;
        }

        let pieceColor = square.piece?.isWhite ? "white" : "black"

        if (square.isSelectable) {
            squareColor = "blue";
        }

        return (
            <button className="square" onClick={() => this.handleClick(square)} disabled={!isSelected && !square.isSelectable} style={{ backgroundColor: squareColor, position: "relative", border: 0 }}>
                {/* <div> */}
                {/* <span style={{ fontSize: 6 }}>{"Col: " + square.coordinate.col + " Row: " + square.coordinate.row}</span> */}
                <span style={{ color: pieceColor, position: "absolute", top: 7, left: 25 }} > {square.piece?.type || ""}</ span>
                {/* </div> */}
            </button >
        );
    }
}
