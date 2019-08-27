import React from 'react';
import { connect } from 'react-redux';

import Restart from './Restart';

const mapStateToProps = state => ({ state });

function Status(props) {

  const { winner, xIsNext } = props.state.data;
  const nextPlayer = xIsNext ? 'X' : 'O';
  const label = winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`;

  return (
    <div className="status">{label} <Restart /></div>
  );
}

export default connect(mapStateToProps)(Status);