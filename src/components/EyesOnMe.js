// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  displayFocusMessage = () => {
    console.log("Good!")
  }

  displayBlurMessage = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return <button onFocus={this.displayFocusMessage} onBlur={this.displayBlurMessage}></button>
  }
}