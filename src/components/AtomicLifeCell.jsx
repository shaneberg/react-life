import React, { Component } from 'react';
// import './App.css';

class AtomicLifeCell extends Component {
  render() {
    let fill = this.props.alive ? "black" : "white";
    return (
      <div>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="5" stroke="black" stroke-width="1" fill={fill}/>
        </svg>
      </div>
    );
  }
}

export default AtomicLifeCell;
