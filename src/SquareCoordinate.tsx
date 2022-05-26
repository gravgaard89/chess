import { action } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import Square from "./Square";
import { boardStore } from "./store/BoardStore";

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

        const { isSelected } = square;

        let squareColor = isSelected ? "green" : "grey"

        if (square.isSelectable) {
            squareColor = "blue";
        }

        let pieceColor = square.piece?.isWhite ? "white" : "black"
        return (
            <button className="square" onClick={() => this.handleClick(square)} disabled={!square.isSelectable} style={{ backgroundColor: squareColor, position: "relative" }}>
                {/* <div> */}
                <span style={{ fontSize: 6 }}>{"Col: " + square.coordinate.col + " Row: " + square.coordinate.row}</span>
                <span style={{ color: pieceColor, position: "absolute", top: 7, left: 22 }} > {square.piece?.type || ""}</ span>
                {/* </div> */}
            </button >
        );
    }
}
