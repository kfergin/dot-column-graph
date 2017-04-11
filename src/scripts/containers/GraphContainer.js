import React from 'react';

import Graph from '../components/Graph';

const GraphContainer = ({data, min, max, dividers, dividerLabels, showExtremes, width, colors}) => {
	let columns = data.length;
	let graphWidth = width * 100;
	let columnSpacing = graphWidth/(columns + 1) < 12 ? graphWidth/(columns + 1) : 12;
	let groupOffset = (columns + 1) * columnSpacing < graphWidth ? (graphWidth - (columns + 1) * columnSpacing)/2 : 0;
	let dividerArr = Array.apply(null, {length: dividers});
	let dividerDiff = (max-min)/(dividers + 1);

	let graphProps = {data, min, max, colors, width: graphWidth, dividers: dividerArr, dividerDiff, dividerLabels, showExtremes, columnSpacing, groupOffset};
	
	return <Graph {...graphProps}/>
}

export default GraphContainer;