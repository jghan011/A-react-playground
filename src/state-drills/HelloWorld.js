import React, { Component } from 'react'



class HelloWorld extends Component{

    constructor(props) {
        super(props)
        this.state ={
            who: "world",
        }
    }

   
    render(){
        return (
            <div>
                <p>
                    Hello, {this.state.who}
                  <button onClick = {()=> this.setState({who:"Hello, friend!"})}>Friend</button>
                  <button onClick = {() => this.setState({who:"Hello React!"})} >React</button>
                  <button onClick = {() => this.setState({who: "Hello, world!"})}>World</button>
                </p>

            </div>

        )

    }



}


export default HelloWorld;