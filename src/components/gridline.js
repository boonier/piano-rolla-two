import React from 'react';

export default class GridLine extends React.Component {

	static defaultProps = {
		stroke: "#CCC",
		strokeWidth: 1
	}

	render() {
		// console.log(this.props);
		return (
			<line {...this.props} />
		)
	} 
}