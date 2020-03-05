import React, { Component } from 'react';
import Grid from './components/Grid';
import Screen from "./components/Screen"

class App extends Component {
  state = {
    number1:"",
    number2:"",
    operator:false
  }

  onClick = (e) =>{
    //detect if the button is an operator, this.state.operator = operator(+ or -)
    if(e.target.value === "+" || e.target.value === "-")
     {
       this.setState({
         operator:e.target.value
       })
     }

     // if button is "="
     else if(e.target.value === "=")
     {
       //if operator is + it's an addition
       if(this.state.operator === "+")
       {
        this.setState({
          number1:parseInt(this.state.number1)+parseInt(this.state.number2)
        })

        // else it's a substraction
       }else{
        this.setState({
          number1:parseInt(this.state.number1)-parseInt(this.state.number2)
        })
       }

       // I reinitialize my other state, except number1
       this.setState({
        operator:false,
        number2:""
       })
     }

     //it's not "="
     else
     {
       //if operator is false I increase number1
      if(!this.state.operator){
        this.setState({
          number1:this.state.number1+e.target.value.toString(2)
        })
       }else{
         //else I increase number2
        this.setState({
          number2:this.state.number2+e.target.value.toString(2)
        })
       }
     }
  }

  render(){
    return (
      <div className="App">
       <h3>Calculator</h3>
       <Grid onClick={this.onClick}/>
       <Screen number1={this.state.number1} number2={this.state.number2} operator={this.state.operator}/>
      </div>
    )
  }
}

export default App;
