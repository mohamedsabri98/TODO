"use client";
import { useEffect, useState } from "react";
import Cell from "./components/Cell";

export default function Home() {
    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
    const [go, setGo] = useState("circle");
    const winComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const [winMsg, setWinMsg] = useState("");
    useEffect(() => {
        winComb.map((comb) => {
            const circleWin = comb.every((cell) => cells[cell] == "circle");
            const crossWin = comb.every((cell) => cells[cell] == "cross");
            if (circleWin) {
                setWinMsg("Circle wins");
            } else if (crossWin) {
                setWinMsg("cross wins");
            }
        });
    }, [cells]);
    return (
        <div className="container">
            <div className="gameboard">
                {cells.map((cell, index) => (
                    <Cell
                        id={index}
                        key={index}
                        go={go}
                        setGo={setGo}
                        cells={cells}
                        setCells={setCells}
                        cell={cell}
                        winMsg={winMsg}
                    />
                ))}
            </div>
            <div>{winMsg}</div>
            {!winMsg && <div>{`its now ${go} turn`}</div>}
        </div>
    );
}
