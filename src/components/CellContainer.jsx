import React, { Component } from 'react';
import AtomicLifeCell from './AtomicLifeCell';
// import './App.css';

class CellContainer extends Component {
  render() {
    return (
      <div>
        <svg height="10" width="10">
          <AtomicLifeCell alive={true} />
        </svg>
      </div>
    );
  }
}

export default CellContainer;
