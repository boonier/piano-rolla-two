import React from 'react';
import './note.scss'

export default class Note extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			x: props.x,
			y: props.y,
			currX: 0,
			currY: 0,
			currentMtx: []
		}
		this.setSelectedNote = this.props.setSelectedNote;
	};

	render() {
		return <rect 
				className="note"
				x={this.state.x} 
				y={this.state.y} 
				width={this.props.width} 
				height={this.props.height} 
				fill={this.props.fill} 
				style={this.props.style} 
				rx={this.props.radius} 
				ry={this.props.radius}
				onMouseUp={this.onMouseUp}
				onMouseDown={this.onMouseDown}
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

	onMouseUp = (e) => {};

	onMouseDown = (e) => {
		this.setSelectedNote(e)
		console.log(e.clientX)
	};

	selectElement = (e) => {
		console.log(this.props.selectedNote);
	};

}