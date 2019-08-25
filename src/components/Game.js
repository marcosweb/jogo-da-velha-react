import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
	constructor(props) {
		super(props);

		const xIsNext = true;
		const squares =  Array(9).fill(null);
		const status = this.getStatus(xIsNext, squares);

		this.state = { squares, xIsNext, status	};
		
		this.handleClick = this.handleClick.bind(this);
		this.calculateWinner = this.calculateWinner.bind(this);
		this.getStatus = this.getStatus.bind(this);
	}

	getStatus(xIsNext, squares) {
		const winner = this.calculateWinner(squares);
		if (winner) {
			return 'Winner: ' + winner;
		}
		return `Next Player: ${xIsNext ? 'X' : 'O'}`;
	}

	handleClick(value) {
		let { squares, xIsNext, status } = { ...this.state };
		if (this.calculateWinner(squares) || squares[value]) {
			return;
		}
		squares[value] = xIsNext ? 'X' : 'O';
		xIsNext = !xIsNext;
		status = this.getStatus(xIsNext, squares);
		console.log(this.state);
		this.setState({ squares, xIsNext, status });
	}

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board state={this.state} handleClick={this.handleClick} />
				</div>
				<div className="game-info">
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

