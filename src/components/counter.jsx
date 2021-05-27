import React, { Component } from 'react';

class Counter extends Component {
	componentWillUnmount() {
		console.log('Counter -- Unmounted');
	}

	render() {
		console.log('Counter -- Rendered');
		const { onIncrement, onDecrement, onDelete, counter } = this.props;
		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button
						onClick={() => onIncrement(counter)}
						className="btn btn-secondary btn-sm m-2"
					>
						+
					</button>
					<button
						onClick={() => onDecrement(counter)}
						className="btn btn-secondary btn-sm"
						disabled={this.props.counter.value == 0 ? 'disabled' : ''}
					>
						-
					</button>
					<button
						onClick={() => onDelete(counter.id)}
						className="btn btn-danger btn-sm m-2"
					>
						X
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;
