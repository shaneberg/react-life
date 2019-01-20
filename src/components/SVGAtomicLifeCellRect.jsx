import React, { Component } from 'react';
// import './App.css';
class SVGAtomicLifeCellRect extends Component {
  render() {
    let fill = this.props.alive ? "blue" : "white";
    return (
      <rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.cellRadius * 2}
        height={this.props.cellRadius * 2}
        fill={fill}/>
    );
  }
}

export default SVGAtomicLifeCellRect;
