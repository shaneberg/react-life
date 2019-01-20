import React, { Component } from 'react';
class SVGAtomicLifeCellRect extends Component {
  render() {
    let fill = "blue";
    const rect =
      <rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.cellRadius * 2}
        height={this.props.cellRadius * 2}
        fill={fill}
      />;
    const toRender = this.props.alive ? rect : null;
    return (toRender);
  }
}

export default SVGAtomicLifeCellRect;
