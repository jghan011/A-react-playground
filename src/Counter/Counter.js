import React from 'react'
import ReactDOM from 'react-dom';

class Counter extends React.Component {

    constructor(props){
         console.log('props in constructor', props)

        super(props)
        this.state = {
            count: 0
        }
    };
    

    handleButtonClick = () => {
        const newNumber = this.state.count + 1;
        console.log('props in handleButtonClick', this.props)//will refrer to count={123} in App.js 
        console.log('state in handleButtonClick', this.state)//refers to count:{} inside  the return () and every time you click the number increases
        this.setState({
            count: newNumber
        }
        )
    }


    render() {
        return (
            <div>
                <div>Count: {this.state.count} </div>
                <button onClick={() => this.handleButtonClick()}>incrememnt</button>
            </div>
        )
    }


}


//on click is  an event handling prop specifically for when eleements are clicked. There is also: onSubmit,onHover,onBlur

export default Counter;