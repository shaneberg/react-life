import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SVGAtomicLifeCellRect.css'

class SVGAtomicLifeCellRect extends Component {
  render() {
    return (
      <CSSTransition
        component='g'
        in={this.props.alive}
        classNames="fade"
        timeout={10} >
        <rect
          x={this.props.x}
          y={this.props.y}
          width={this.props.cellRadius * 2}
          height={this.props.cellRadius * 2}
          fill="blue"/>
      </CSSTransition>
    );
    // return (
    //     {toRender}
    //   </CSSTransition>
    // );
  }
}

export default SVGAtomicLifeCellRect;
