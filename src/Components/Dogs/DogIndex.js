import React,  { Component } from "react";

export default class DogIndex extends Component {
    constructor(props) {// method that stores default values of state 
        super(props);
        this.state = {
            dogPic: '',
        }
    }

    getDogPic = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            this.setState({
                dogPic: data.message,
            })
        })
        .catch((error) => console.log(error))
    }

    render() { // displays to dom
        return (
        <div className="main">
        <div className="mainDiv">
        <h1>Dog Index</h1>
        <button onClick={this.getDogPic}>Get Dog Pic</button>
               <img src={this.state.dogPic} alt="dog"/>
        </div></div>
        )
    }
}