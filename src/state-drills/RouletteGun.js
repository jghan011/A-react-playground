import React, { Component } from 'react';

class Roulette extends Component {

    static defaultProps = {
        bulletInChamber: 8
      };
      
      constructor(props){
          super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
        console.log(this.spinningTheChamber);

      }
      handleSpinningTheChamber = () => {
        const spinIsTrue = this.state.spinningTheChamber;
        if (spinIsTrue === "true") {
            return "spinning the chamber and pulling the trigger! ...."
        }

      }
   
    render(){
        return(
            <div>
                <p>

                    {this.handleSpinningTheChamber()}
                <button onClick = {() => this.setState({spinningTheChamber:"true"}
                )}> Pull the trigger!</button>
                </p>
            </div>
        )
    }

}


export default Roulette;