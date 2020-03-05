import React,{Component} from "react"
import Row from "./Row"

export default class Grid extends Component{
    render(){
        return(
            <div className="container">
                   <Row row={1} onClick={this.props.onClick}/>
                   <Row row={4} onClick={this.props.onClick}/>
                   <Row row={7} onClick={this.props.onClick}/>
                   <Row row={"+"} onClick={this.props.onClick}/>
                    <button value="=" onClick={this.props.onClick}>=</button>
                    <button value="reset" onClick={this.props.onClick}>reset</button>
            </div>
        )
    }
}