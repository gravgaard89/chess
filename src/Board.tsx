import * as React from "react";
import { boardStore } from "./store/BoardStore";
import { observer } from "mobx-react";
import SquareCoordinate from "./SquareCoordinate";
import Square from "./Square";
import Coordinate from "./Coordinate";

@observer
class Board extends React.Component {
    renderSquare(square: Square, isPressed: boolean) {
        return <SquareCoordinate square={square} isPressed={isPressed} />;
    }

    getSquare(col: number, row: number) {
        const square = boardStore.squares.find((x) => x.coordinate === new Coordinate(col, row));
        return square;
    }

    render() {
        const { squares, isPressed, whiteScore, blackScore } = boardStore;

        return (
            <div>
                <div>
                    <SquareCoordinate square={squares[0]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[1]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[2]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[3]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[4]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[5]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[6]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[7]} isPressed={isPressed} />
                </div>
                <div>
                    <SquareCoordinate square={squares[8]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[9]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[10]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[11]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[12]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[13]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[14]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[15]} isPressed={isPressed} />
                </div>
                <div>
                    <SquareCoordinate square={squares[16]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[17]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[18]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[19]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[20]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[21]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[22]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[23]} isPressed={isPressed} />
                </div>
                <div>
                    <SquareCoordinate square={squares[24]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[25]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[26]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[27]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[28]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[29]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[30]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[31]} isPressed={isPressed} />
                </div>
                <div>
                    <SquareCoordinate square={squares[32]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[33]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[34]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[35]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[36]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[37]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[38]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[39]} isPressed={isPressed} />
                </div>
                <div>
                    <SquareCoordinate square={squares[40]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[41]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[42]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[43]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[44]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[45]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[46]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[47]} isPressed={isPressed} />
                </div>
                <div>
                    <SquareCoordinate square={squares[48]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[49]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[50]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[51]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[52]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[53]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[54]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[55]} isPressed={isPressed} />
                </div>
                <div>
                    <SquareCoordinate square={squares[56]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[57]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[58]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[59]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[60]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[61]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[62]} isPressed={isPressed} />
                    <SquareCoordinate square={squares[63]} isPressed={isPressed} />
                </div>
                {whiteScore != blackScore &&
                    <p>{whiteScore > blackScore ? "White +" + (whiteScore - blackScore) : "Black +" + (blackScore - whiteScore)}</p>
                }
            </div>
        );
    }
}

export default Board;
