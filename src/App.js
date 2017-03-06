
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
		this.notesHandler = this.notesHandler.bind(this);
		this.state = {
			notes: [
				{x: 0, y: 0, dur: 5}, 
				{x: 3, y: 10, dur: 8},
				{x: 4, y: 20, dur: 20},
				{x: 16, y: 50, dur: 10},
				{x: 32, y: 50, dur: 20}
			]
		}
	};

	render() {
		return (
			<Grid w={this.props.w} h={this.props.h} patternLength={64} state={this.state} notesHandler={this.notesHandler} />
		)
	};

	notesHandler(idx) {
		var newNotesArr = this.state.notes.slice();
		newNotesArr[idx].x = Math.floor(Math.random() * 20);
		newNotesArr[idx].dur = Math.floor(Math.random() * 20);
		this.setState({
			notes: newNotesArr
		});
	}

}
