import React, { Component } from "react"

export default class Screen extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        {
                            !this.props.operator ?
                            <input type="text" value={this.props.number1} readOnly/> :
                            <input type="text" value={this.props.number2} readOnly/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}