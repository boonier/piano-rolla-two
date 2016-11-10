import React from 'react';
import GridLine from './gridline';
import Note from './note';

export default class Grid extends React.Component {

	constructor(props) {
		super(props);
		this.setSelectedNote = this.setSelectedNote.bind(this);
		this.state = {
			selectedNote: null,
		}
	};

	render() {
		return (
			<svg width={this.props.w} height={this.props.h} viewBox={this.props.viewBox}>
				<rect className="bg" x={0} y={0} width={this.props.w} height={this.props.h} fill="rgb(232, 242, 238)" />
				<g className="grid">
					{this.createGridLines()}
				</g>
				<g className="note-data">
					<Note key={'n1'} setSelectedNote={this.setSelectedNote} x={0} y={30} width={12.5*3} height={this.props.noteH} />
					<Note key={'n2'} setSelectedNote={this.setSelectedNote} x={12.5*2} y={50} width={12.5*8} height={this.props.noteH} />
					<Note key={'n3'} setSelectedNote={this.setSelectedNote} x={12.5*3} y={70} width={12.5*12} height={this.props.noteH} />
				</g>
			</svg>
		)
	};

	static defaultProps = {
		x: 50,
		y: 50,
		noteW: 37.5,
		noteH: 10,
		fill: 'green',
		viewBox: [-0.5, -0.5, 800.5, 600.5].join(' '),
		strokeColour: '#ddd'
	};

	createGridLines() {
		let gridLines = [];
		let wInt = this.props.w / 64;
		// horizontal
		for (var i = 0; i < 127; i++) {
			gridLines.push(
				<GridLine key={i+'h'} x1={0} y1={10*i} x2={this.props.w} y2={10*i} stroke={this.props.strokeColour} strokeWidth={1} />
			)
		}
		// vertical
		for (var i = 0; i < 64; i++) {
			gridLines.push(
				<GridLine key={i+'v'} x1={wInt*i} y1={0} x2={wInt*i} y2={this.props.h}  stroke={this.props.strokeColour} strokeWidth={1} />
			)
		}
		
		return gridLines;
	}

	 setSelectedNote(e) {
	 	// console.log(e.target);
	 	this.setState({
	 		selectedNote: e.target
	 	});
	 	console.log(this.state)
	 }

}