import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

import {getRange, hexToRgb} from '../utils';

const AnimatedColumn = ({values, shift, color}) => {
	let concentration = values.length/(1000*getRange(values));
	let opacity = 0.8 * (1 - concentration);
	// Fun to experiment with willEnter & willLeave positions
	return (
		<TransitionMotion
			willEnter={() => ({cy: Math.random()*100, opacity: 0})}
			willLeave={() => ({cy: spring(Math.random()*100), opacity: spring(0)})}
			styles={values.map((v, i) => ({
				// key is the "connection" that transitions each
				// point to their new values
				key: ''+i,
				style: {cy: spring(v), opacity: spring(1)}
			}))}
		>
			{instances => (
				<g fill={hexToRgb(color, opacity > 0.05 ? opacity : 0.05)} style={{transform: `translate3d(${shift}px, 0, 0)`}}>
					{instances.map(inst => (
						<circle key={inst.key} cx="0" cy={100 - inst.style.cy} style={{opacity: inst.style.opacity}}/>
					))}
				</g>
			)}
		</TransitionMotion>
	);
}

export default AnimatedColumn;