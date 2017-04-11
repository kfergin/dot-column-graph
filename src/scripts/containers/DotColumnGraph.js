import React from 'react';
import GraphApp from '../components/GraphApp';

class DotColumnGraph extends React.Component {
	render() {
		let {data, ...props} = this.props;
		let convertedData = data.map(d => {
			return {
				name: d.name,
				values: d.values.map(val => (val - props.min)/(props.max - props.min))
			};
		});
		return (
			<GraphApp
				data={convertedData}
				{...props}
			/>
		);
	}
};

DotColumnGraph.defaultProps = {
	width: 1.8,
	xLabel: '',
	yLabel: '',
	min: 0,
	max: 1,
	dividers: 3,
	dividerLabels: false,
	showExtremes: false,
	colors: ['#3498db','#e74c3c','#1abc9c','#f1c40f','#9b59b6','#2ecc71']
};

export default DotColumnGraph;