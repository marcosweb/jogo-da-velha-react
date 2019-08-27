import React, { Component } from 'react';
import { connect } from 'react-redux'

import History from './History';
import Board from './Board';

const mapStateToProps = state => ({ state: state });
export class Game extends Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board state={this.props.state} />
        </div>
        <div className="game-info">
          <History />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Game);