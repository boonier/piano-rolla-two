import React from 'react';
import GridLine from './gridline';

export default class Grid extends React.Component {

	static defaultProps = {
		x: 50,
		y: 50,
		r: 20,
		fill: 'green',
		viewBox: [0, -0.5, 800, 600].join(' ')
	};
	
	createGridLines() {
		let gridLines = [];
		for (var i = 0; i < 127; i++) {
			gridLines.push(
				<GridLine key={i} x1={0} y1={10*i} x2={this.props.w} y2={10*i} />
			)
		}
		return gridLines;
	}

	render() {
		return (
			<svg width={this.props.w} height={this.props.h} viewBox={this.props.viewBox}>
				<rect className="bg" x={0} y={0} width={this.props.w} height={this.props.h} fill="rgb(232, 242, 238)" />
				<g className="grid">{this.createGridLines()}</g>
				<g className="note-data">
					<circle cx={this.props.x} cy={this.props.y} r={this.props.r} fill={this.props.fill} />
				</g>
			</svg>
		)
	};
}