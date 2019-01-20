import React, { Component } from 'react';
import SVGAtomicLifeCellRect from './SVGAtomicLifeCellRect';
// import './App.css';



// Cell width = circle width + padding
// Cell height = circle height + padding
// Container width = cell width * number of cells + padding
// Container height = cell height * number of cells + padding

// Property list
// cellWidth
// cellHeight
// cellPadWidth
// cellPadHeight
// boardWidth (number of cells)
// boardHeight (number of cells)
// cell array?
class SVGReactLifeBoard extends Component {

  render() {
    const cellRadius = this.props.cellRadius;
    const boardHeight = cellRadius + (this.props.height * cellRadius * 2);
    const boardWidth = cellRadius + (this.props.width * cellRadius * 2);
    const svgCells = this.props.cells.map((cellRow) => {
      return cellRow.map((cell) => {
        const xPos = cellRadius + (cell.pos.x * cellRadius * 2);
        const yPos = cellRadius + (cell.pos.y * cellRadius * 2);
        return (
          <SVGAtomicLifeCellRect
            cellRadius={this.props.cellRadius}
            key={xPos + yPos + ""}
            alive={cell.alive}
            x={xPos}
            y={yPos}
          />
        );
      });
    });
    return (
      <div>
        <svg height={boardHeight} width={boardWidth}>
          {svgCells}
        </svg>
      </div>
    );
  }
}

export default SVGReactLifeBoard;
