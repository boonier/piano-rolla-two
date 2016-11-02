import React, { Component } from 'react';
import Grid from './components/grid';

export default class App extends Component {
	
	static defaultProps = {
		w: 800,
		h: 600,
		fill: "green"
	}

	render() {
		return (
			<Grid {...this.props} />
		)
	}
}
