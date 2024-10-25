import React  from "react";
import "./styles/square.css"

export function Square({value, onSquareClick}) {



    return (
        <>
            <button className="square" onClick={onSquareClick}>{value}</button>
        </>
    )
}