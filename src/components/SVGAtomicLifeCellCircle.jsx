import React, { Component } from 'react';
// import './App.css';

class SVGAtomicLifeCellCircle extends Component {
  render() {
    let fill = this.props.alive ? "black" : "red";
    return (
      <circle cx={this.props.x} cy={this.props.y} r={this.props.cellRadius} fill={fill}/>
    );
  }
}

export default SVGAtomicLifeCellCircle;
