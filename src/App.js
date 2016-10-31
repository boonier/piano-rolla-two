import React, { Component } from 'react';

export default class App extends Component {
	
	static defaultProps = {
		x: 50,
		y: 50,
		r: 20,
		fill: 'red'
	}
	
	render() {
		return (
			<svg xmlns="http://www.w3.org/2000/svg">
				<circle cx={this.props.x} cy={this.props.y} r={this.props.r} fill={this.props.fill} />
			</svg>
		);
	}
}
