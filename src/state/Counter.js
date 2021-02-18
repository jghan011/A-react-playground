import React from 'react'
import ReactDOM from 'react-dom';

class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick() {
        console.log(this.state.count)
    }
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button 
          onClick={this.handleButtonClick}
          >
            Add 1
          </button>
        </div>
      )
    }
  }
//on click is  an event handling prop specifically for when eleements are clicked. There is also: onSubmit,onHover,onBlur

export default Counter;