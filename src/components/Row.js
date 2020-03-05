import React,{Component} from "react"
import MyNumber from "./MyNumber"

export default class Row extends Component{
    render(){
        return(
            <div className="row">
                    {
                        Number.isInteger(this.props.row) ?
                            <div className="col-md-4">
                                <MyNumber number={this.props.row} onClick={this.props.onClick}/>
                                <MyNumber number={this.props.row+1} onClick={this.props.onClick}/>
                                <MyNumber number={this.props.row+2} onClick={this.props.onClick}/>
                            </div>
                        :
                        <div className="col-md-4">
                            <MyNumber number={"+"} onClick={this.props.onClick}/>
                            <MyNumber number={0} onClick={this.props.onClick}/>
                            <MyNumber number={"-"} onClick={this.props.onClick}/>
                        </div>
                    }
            </div>
        )
    }
}