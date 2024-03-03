import React, { Dispatch, SetStateAction } from "react";

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winMsg: string;
};

const Cell = ({ go, setGo, id, cells, setCells, cell, winMsg }: CellProps) => {
    if (winMsg) {
        setTimeout(() => {
            window.location.reload();
        }, 1500);
        return;
    }

    const handleClick = () => {
        const notTaken = !cells[id];

        if (notTaken) {
            if (go == "circle") {
                handleCellChnge("circle");
                setGo("cross");
            } else if (go == "cross") {
                handleCellChnge("cross");
                setGo("circle");
            }
        }
    };

    const handleCellChnge = (changeCell: string) => {
        let copyCells = [...cells];
        copyCells[id] = changeCell;
        setCells(copyCells);
    };

    return (
        <div className="square" onClick={() => handleClick()}>
            <div className={cell}>
                {cell ? (cell == "circle" ? "o" : "X") : ""}
            </div>
        </div>
    );
};

export default Cell;
