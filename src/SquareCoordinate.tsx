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
        return (
            <button className="square" onClick={() => this.handleClick(square)} disabled={!square.isSelectable} style={square.isSelected ? { backgroundColor: "green" } : { backgroundColor: "grey" }}>
                <span style={{ fontSize: 6 }}>{"Col: " + square.coordinate.col + " Row: " + square.coordinate.row}</span>
                <span style={square.piece?.isWhite ? { color: "white" } : { color: "black" }}>{square.piece?.type || ""}</span>
            </button>
        );
    }
}
