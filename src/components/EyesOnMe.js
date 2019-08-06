// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
    render() {
        return (
            <button onFocus={this.focusFunction} onBlur={this.blurFunction}></button>
        )
    }

    focusFunction = () => {
        console.log("Good!")
    }

    blurFunction = () => {
        console.log("Hey! Eyes on me!")
    }
}