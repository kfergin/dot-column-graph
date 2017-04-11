import React from 'react';

import { getRange, hexToRgb } from '../utils';

const Column = ({values, shift, color}) => {
	let concentration = values.length/(10*getRange(values));
	let opacity = 0.8 * (1 - concentration);
	return (
		<g fill={hexToRgb(color, opacity > 0.05 ? opacity : 0.05)} style={{transform: `translate3d(${shift}px, 0, 0)`}}>
			{values.map((v, i) => <circle key={i} cx="0" cy={100 - v}/>)}
		</g>
	);
}

export default Column;