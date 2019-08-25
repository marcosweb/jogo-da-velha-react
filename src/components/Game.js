import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {

	constructor(props) {
		super(props);

		const { history, squares, current, status, xIsNext } = this.reset();

		this.state = { squares, xIsNext, status, history, current };

		this.handleClick = this.handleClick.bind(this);
		this.calculateWinner = this.calculateWinner.bind(this);
		this.getStatus = this.getStatus.bind(this);
		this.back = this.back.bind(this);
		this.showHistory = this.showHistory.bind(this);
		this.reset = this.reset.bind(this);
		this.restart = this.restart.bind(this);
	}

	reset() {
		const xIsNext = true;
		const squares = Array(9).fill(null);
		const history = [[...squares]];
		const current = 0;
		const status = this.getStatus(xIsNext, squares);
		return { history, squares, current, status, xIsNext };
	}

	restart() {
		const state = this.reset();
		this.setState({ ...state });
	}

	getStatus(xIsNext, squares) {
		const winner = this.calculateWinner(squares);
		if (winner) {
			return this.renderWinner(winner);
		}
		return `Next Player: ${xIsNext ? 'X' : 'O'}`;
	}

	renderWinner(winner) {
		return (
			<div>
				Winner {winner} &nbsp;
				<button onClick={this.restart}> Restart Game </button>
			</div>
		)
	}

	handleClick(value) {
		let { squares, xIsNext, status, history, current } = { ...this.state };
		if (this.calculateWinner(squares) || squares[value]) {
			return;
		}
		squares[value] = xIsNext ? 'X' : 'O';
		history.push([...squares]);
		current = history.length - 1;
		xIsNext = !xIsNext;
		status = this.getStatus(xIsNext, squares);
		this.setState({ ...this.state, squares, xIsNext, status, history, current });
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

	back(index) {
		const squares = [...this.state.history[index]];
		const history = this.state.history.slice(0, index + 1);
		const xIsNext = index % 2 === 0;
		const status = this.getStatus(xIsNext, squares);
		this.setState({ ...this.state, squares, history, xIsNext, status });
	}

	showHistory() {
		const max = this.state.history.length - 1;
		const history = this.state.history.slice(0, max);
		return (
			history.map((item, index) => (
				<li key={index}>
					<button onClick={() => this.back(index)}>
						{index ? index : 'restart'}
					</button>
				</li>
			))
		);
	}

	render() {
		const winner = this.calculateWinner(this.state.squares);
		return (
			<div className="game">
				<div className="game-board">
					<Board state={this.state} handleClick={this.handleClick} />
				</div>
				<div className="game-info">
					<ol>{!winner && this.showHistory()}</ol>
				</div>
			</div>
		);
	}
}
