import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clickRestart } from './../actions';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators({ clickRestart }, dispatch);

function Restart(props) {
  const { winner } = props.state.data;

  if (!winner) return null;

  return (
    <button className="restart" onClick={props.clickRestart}>
      Restart
    </button>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Restart);
