import React from 'react';
import { render } from 'react-dom';
import DotColumnGraph from './containers/DotColumnGraph';
import styles from '../styles/main.scss';

import { genData } from './utils';

// data should be an array of objects{name, values:[]}
let data = genData(6, 76, 0, 1);

render(
	<DotColumnGraph
		data={data}
		dividers={4}
		dividerLabels={true}
		xLabel="X Axis Label"
		yLabel="Y Axis Label"
	/>,
document.getElementById('graphEl'));