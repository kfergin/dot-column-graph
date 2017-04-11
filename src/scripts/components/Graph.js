import React from 'react';

import Column from './Column';
import Extremes from './Extremes';

const Graph = ({data, min, max, colors, width, dividers, dividerLabels, showExtremes, dividerDiff, columnSpacing, groupOffset}) => {
	return (
		<svg className="graph" viewBox={'0 0 ' + width + ' 100'}>
			{dividers.map((_,i,arr) => {
				let yPos = (i+1)/(arr.length+1)*100;
				return <line key={i} x1="0" x2={width} y1={yPos} y2={yPos}/>;
			})}
			{!dividerLabels ? null : dividers.map((_,i,arr) => {
				let labelText = (min + dividerDiff*(i+1)).toFixed(2).replace(/\.?0+$/, '');
				return (
					<text key={i} x="0" y={100 * (1 - (i+1)/(arr.length+1))}>
						{labelText}
						{dividerLabels === true ? '' : dividerLabels}
					</text>
				);
			})}
			{!showExtremes ? null : (
				<Extremes
					width={width}
					min={min}
					max={max}
					dividerLabels={dividerLabels}
				/>
			)}
			<g style={{transform: `translateX(${groupOffset}px)`}}>
				{data.map((d, i) => (
					<Column
						key={i}
						values={d.values}
						shift={(i+1) * columnSpacing}
						color={colors[i%colors.length]}
					/>
				))}
			</g>
		</svg>
	);
}

export default Graph;