import React from 'react';
import GridLine from './gridline'

export default class GridLines extends React.Component {

	constructor(props) {
		super(props);
	};

	render() {
		return (
			<g className={this.props.className}>
				{this.createGridLines(this.props)}
			</g>
		);
	};

	createGridLines(props) {
		
		let gridLines = [];
		let wInt = props.w / props.patternLength;
		// horizontal
		for (var i = 0; i < 127; i++) {
			gridLines.push(
				<GridLine key={i+'h'} x1={0} y1={10*i} x2={props.w} y2={10*i} stroke={props.strokeColour} strokeWidth={1} />
			)
		}
		// vertical
		for (var i = 0; i < props.patternLength; i++) {
			let sw, c;
			if (i % 4 == 0) {
				sw = 1.4;
				c = '#CCC';
			} else {
				sw = 1;
				c = '#DDD';
			}
			gridLines.push(
				<GridLine key={i+'v'} x1={wInt*i} y1={0} x2={wInt*i} y2={props.h} stroke={c} strokeWidth={sw} />
			)
		}
		return gridLines;
	}


	static defaultProps = {
		strokeColour: '#ddd'
	};

}