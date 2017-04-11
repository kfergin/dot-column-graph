import React from 'react';

import GraphContainer from '../containers/GraphContainer';

const App = (props) => {
	let dcgClassess = `dot-column-graph${props.yLabel && ' y-label-padding'}`;
	return (
		<div className={dcgClassess}>
			<div>
				<GraphContainer
					{...props}
				/>
				{!props.yLabel ? null : <h6 className="y-label">{props.yLabel}</h6>}
			</div>
			<ul className="legend">
				{props.data.map((d, i) => {
					return <li key={i} style={{color: props.colors[i%props.colors.length]}}>{d.name}</li>
				})}
			</ul>
			{!props.xLabel ? null : <h6 className="x-label">{props.xLabel}</h6>}
		</div>
	);
}

export default App;