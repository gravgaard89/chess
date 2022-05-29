import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";
import { boardStore } from "./store/BoardStore";
import { observer } from "mobx-react";
import { action } from "mobx";
import SquareCoordinate from "./SquareCoordinate";

@observer
class App extends React.Component {
    @action handleReset = () => {
        boardStore.reset();
    };

    render() {
        const { isWhiteTurn, whiteScore, blackScore, scoreText } = boardStore;

        return (
            <div className="flex">
                <div className="game">
                    <div className="flex">
                        <div className="flexOne">
                            <button onClick={() => this.handleReset()}>Reset</button>
                        </div>
                        <div className="flexOne" style={{ textAlign: "center" }}>
                            <div className="status">
                                <span>{isWhiteTurn ? "White " : "Black "} to move</span>
                            </div>
                        </div>
                        <div className="flexOne" style={{ textAlign: "right" }}>
                            <span>{scoreText}</span>
                        </div>
                    </div>
                    <Board />
                </div>

            </div>
        );
    }
}

export default App;
