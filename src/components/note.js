import React from 'react';
import './note.scss';
import {noteEdgeSize} from '../lib/constants';

export default class Note extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			overType: 'note'
		};
		this.notes = this.props.notes;
	};

	render() {

		return <rect 
				className={this.state.overType}
				x={this.props.x} 
				y={this.props.y}
				width={this.props.width} 
				height={this.props.height} 
				style={this.props.style}
				rx={this.props.radius}
				ry={this.props.radius}
				transform={this.state.currentMatrix}
				onMouseUp={this.onMouseUp}
				onMouseDown={this.props.onMouseDown}
				onMouseOver={this.onMouseOver}
				onMouseOut={this.onMouseOut}
				onMouseMove={this.onMouseMove}
				/>
	};

	static defaultProps = {
		x: 0,
		y: 0,
		width: 30,
		height: 10,
		style: {
			strokeWidth: 1,
			stroke: '#333'
		},
		radius: 2
	};

	onMouseOver = (e) => {};
	onMouseUp = (e) => {};

	onMouseOut = (e) => {
		this.setNoteClass();
	};

	onMouseMove = (e) => {
		let currEl = e.target.getBoundingClientRect();	
		if (e.clientX <= currEl.right && e.clientX >= (currEl.right - noteEdgeSize)) { 
			this.setNoteClass('right');
		} else if (e.clientX >= currEl.left && e.clientX <= (currEl.left + noteEdgeSize)) { 
			this.setNoteClass('left');
		} else {
			this.setNoteClass();
		}
	};

	setNoteClass = (c) => {
		let newClass = ['note'];
		if (c) newClass.push(c);
		this.setState({
			overType: newClass.join(' ')
		});
	};

}
