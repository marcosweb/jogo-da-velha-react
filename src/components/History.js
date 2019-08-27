import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clickHistory } from './../actions';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators({ clickHistory }, dispatch);

const showHistory = props => {
  const { data } = props.state;
  const max = data.history.length - 1;
  const history = data.history.slice(0, max);

  return (
    history.map((item, index) => (
      <li key={index}>
        <button onClick={() => props.clickHistory(index)}>
          {index ? index : 'restart'}
        </button>
      </li>
    ))
  );
}

function History(props) {
  return (<ol>{!props.state.data.winner && showHistory(props)}</ol>);
}

export default connect(mapStateToProps, mapDispatchToProps)(History);