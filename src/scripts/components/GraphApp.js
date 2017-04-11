import React from 'react';

import GraphContainer from '../containers/GraphContainer';

const GraphApp = (props) => {
	let {xLabel, yLabel, data, colors, ...graphProps} = props;
	let dcgClassess = `dot-column-graph${yLabel && ' y-label-padding'}`;
	return (
		<div className={dcgClassess}>
			<div>
				<GraphContainer
					{...{...graphProps, data, colors}}
				/>
				{!yLabel ? null : <h6 className="y-label">{yLabel}</h6>}
			</div>
			<ul className="legend">
				{data.map((d, i) => {
					return <li key={i} style={{color: colors[i%colors.length]}}>{d.name}</li>
				})}
			</ul>
			{!xLabel ? null : <h6 className="x-label">{xLabel}</h6>}
		</div>
	);
}

export default GraphApp;