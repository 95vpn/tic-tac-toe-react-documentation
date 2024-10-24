import React from "react"
import "./styles/square.css"
import { Square } from "./Square"

export function Board() {
    return (
        <>
            <div className="board-row">
                <Square/>
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />

            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}