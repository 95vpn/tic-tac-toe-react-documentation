import React , { useState } from "react";
import "./styles/square.css"

export function Square() {

    const [value, setValue] = useState(null)

    function handleClick() {
        setValue('X')
    }

    return (
        <>
            <button className="square" onClick={handleClick}>{value}</button>
        </>
    )
}