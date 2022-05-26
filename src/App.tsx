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
        const { isWhiteTurn } = boardStore;
        return (
            <>
                <button onClick={() => this.handleReset()}>Reset</button>
                <div className="status">{isWhiteTurn ? "White " : "Black "} to move</div>
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{logo}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
