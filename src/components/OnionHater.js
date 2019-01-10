import React, { Component } from 'react';
import './OnionHater.css';


class OnionHater extends Component {
  constructor (props) {
    super(props);
    this.onionListener = this.onionListener.bind(this);
  }
  onionListener(event) {
    const guilty = event.target;
    if (guilty.value.includes('cebolla')){ 
    guilty.classList.add('red');
    } else {
      guilty.classList.remove('red')
    };
};
  render() {
    return (
      <div className="OnionHater">
       <textarea className ="text-container" rows="8" cols="60" onKeyUp ={this.onionListener}>

       </textarea>
      </div>
    );
  }
}

export default OnionHater;