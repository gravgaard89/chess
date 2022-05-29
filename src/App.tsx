import * as React from "react";
import "./App.css";
import Board from "./Board";
import { boardStore } from "./store/BoardStore";
import { observer } from "mobx-react";
import { action } from "mobx";

@observer
class App extends React.Component {
    @action handleReset = () => {
        boardStore.reset();
    };

    render() {
        const { isWhiteTurn, scoreText } = boardStore;

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
