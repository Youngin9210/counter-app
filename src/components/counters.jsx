import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		console.log('Counters -- Rendered');
		const { onReset, onDelete, onDecrement, onIncrement, counters } =
			this.props;
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						// passing through counter object instead of numerous properties
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
