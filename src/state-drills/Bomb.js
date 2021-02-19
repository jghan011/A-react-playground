import React, { Component } from 'react';





class Bomb extends Component {
  
        state = {
            count: 0
        }

    

componentDidMount() {
    const seconds = 1000;
    this.interval = setInterval(() => {
        this.setState({
            count: this.state.count + 1
          
        })
        
    },seconds)
    // console.log(this.state)
}

componentUnMount() {
    clearInterval(this.interval)
}


renderDisplay() {
    const {count} = this.state;
    if(count  >= 8) {
        clearInterval(this.interval)
        return "Boom"
    }
    else if (count % 2 === 0) {
        return 'tick'
      } else {
        return 'tock'
      }

}




    render(){
        return(
        <div>
        <p>
            <div> count:{this.renderDisplay()} </div>
        </p>
    </div>
    )

    }

}

export default Bomb;