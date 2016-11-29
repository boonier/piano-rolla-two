import React from 'react';
import GridLines from './gridlines';
import Notes from './notes';

// Grid
//// GridLines
//// NoteData
////// Note
////// Note



export default class Grid extends React.Component {

	constructor(props) {
		super(props);
		// this.setSelectedNote = this.setSelectedNote.bind(this);
		this.viewBox = [-0.5, -0.5, this.props.w + 0.5, this.props.h + 0.5].join(' ');
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
			<div className="grid">
				<svg width={this.props.w} height={this.props.h} viewBox={this.viewBox}>
					<rect className="bg" x={0} y={0} width={this.props.w} height={this.props.h} fill="rgb(232, 242, 238)" />
					<GridLines className="grid" {...this.props} />
					<Notes className="note-data" notes={this.state.notes} {...this.props} />
				</svg>
			</div>
		)
	};

	static defaultProps = {
		noteH: 10
	};
	
	// calcGridHInt(props, pattLength) {
	// 	console.log(props);
	// 	return this.props.w/pattLength;
	// };

	setSelectedNote(e) {
		this.setState({
			selectedNote: e.target
		});
	}

}