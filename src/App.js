
// ControlBar
//// Transport
//// OscConnect
// Grid
// Keyboard
// Timeline

import React, { Component } from 'react';
import Grid from './components/grid';

export default class App extends Component {

	constructor(props) {
		super(props);
	};

	render() {
		return (
			<Grid w={this.props.w} h={this.props.h} patternLength={64} />
		)
	};

}
