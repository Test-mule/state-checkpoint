import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props){
      super(props);
      this.state={
          number:0,
      };

  }
  componentDidMount=()=>{
      setInterval (()=>{
        this.setState((prevState) =>({
            number: prevState.number +1}));
        },1000);
  };
    render() {
        return (
            <div>
                {this.state.number} have passed since mounting.
            </div>
        )
    }
}
