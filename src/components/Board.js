import React from 'react';
import { connect } from 'react-redux'

import Square from './Square';
import Status from './Status';

const mapStateToProps = state => ({ state: state });

function Board(props) {

  return (
    <div>
      <Status />
      <div className="board-row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className="board-row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className="board-row">
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Board);