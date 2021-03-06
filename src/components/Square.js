import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clickSquare } from './../actions';

const mapStateToProps = state => ({ state: state });
const mapDispatchToProps = dispatch => bindActionCreators({ clickSquare }, dispatch);

function Square(props) {
  const { value } = props;
  const square = props.state.data.squares[value];
  
  return (
    <button className="square" onClick={() => props.clickSquare(value)}>
      {square}
    </button>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
