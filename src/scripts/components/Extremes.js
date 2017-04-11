import React from 'react';

const Extremes = ({width, min, max, dividerLabels}) => {
	return (
		<g className="extremes">
			{!dividerLabels ? null : [max, min].map((d,i) => (
				<text key={i} x="0" y={i * 100}>
					{d}{typeof dividerLabels === 'boolean' ? '' : dividerLabels}
				</text>
			))}
			<line x1="0" x2={width} y1="0" y2="0"/>
			<line x1="0" x2={width} y1="100" y2="100"/>
		</g>
	);
}

export default Extremes;