import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SVGAtomicLifeCellRect from './SVGAtomicLifeCellRect';
import './SVGReactLifeBoard.css';

class SVGReactLifeBoard extends Component {

  render() {
    const cellRadius = this.props.cellRadius;
    const boardHeight = cellRadius + (this.props.height * cellRadius * 2);
    const boardWidth = cellRadius + (this.props.width * cellRadius * 2);
    const svgCells = this.props.cells.map((cellRow) => {
      return cellRow.map((cell) => {
        const xPos = cellRadius + (cell.pos.x * cellRadius * 2);
        const yPos = cellRadius + (cell.pos.y * cellRadius * 2);
        if (cell.alive) {
          return (
            <CSSTransition key={cell.pos.x + cell.pos.y + ""} classNames="fade" timeout={250} >
              <SVGAtomicLifeCellRect
                cellRadius={this.props.cellRadius}
                key={xPos + yPos + ""}
                alive={cell.alive}
                x={xPos}
                y={yPos}
              />
            </CSSTransition>
          );
        } else {
          return (null);
        }
      });
    });
    return (
      <div>
        <svg height={boardHeight} width={boardWidth}>
          <TransitionGroup component='g'>
            {svgCells}
          </TransitionGroup>
        </svg>
      </div>
    );
  }
}

export default SVGReactLifeBoard;
