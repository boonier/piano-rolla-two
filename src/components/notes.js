import React from 'react';
import Note from './note'

export default class Notes extends React.Component {

	constructor(props) {
		super(props);
		this.notes = props.state.notes;
		this.noteInt = props.w / props.patternLength;
	};

	render() {
		return (
			<g className={this.props.className}>
				{this.renderNotes(this.props)}
			</g>
		);
	};

	renderNotes(props) {
		const notes = this.notes.map((note, idx) => {
			return <Note 
					key={'n'+idx}
					id={idx}
					x={note.x * this.noteInt} 
					y={note.y} 
					width={note.dur * this.noteInt} 
					height={10}
					onMouseDown={ () => this.handleClick(idx)}
					{...this.props}
					/>
		});
		return notes;
	};

	handleClick(idx) {
		this.props.notesHandler(idx);
	}


}