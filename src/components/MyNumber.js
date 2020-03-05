import React from "react"

const MyNumber = (props) =>{
    return(
    <button value={props.number} onClick={props.onClick}>{props.number}</button>
    )
}

export default MyNumber