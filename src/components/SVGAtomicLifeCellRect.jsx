import React, { Component } from 'react';

class SVGAtomicLifeCellRect extends Component {
  render() {
    return (
          <rect
            x={this.props.x}
            y={this.props.y}
            width={this.props.cellRadius * 2}
            height={this.props.cellRadius * 2}
            fill="blue"
          />
    );
  }
}

export default SVGAtomicLifeCellRect;
