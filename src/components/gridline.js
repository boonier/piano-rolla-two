import React from 'react';

export default class GridLine extends React.Component {

	// static coords = {
	// 	x1: this.props.x1,
	// 	y1: this.props.y1,
	// 	x2: this.props.x2,
	// 	y2: this.props.y2,
	// }

	render() {
		// console.log(this.props);
		return (
			<line {...this.props} stroke="#CCC" strokeWidth={1} />
		)
	} 
}