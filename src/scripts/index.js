import React from 'react';
import { render } from 'react-dom';
import DotColumnGraph from './containers/DotColumnGraph';
import styles from '../styles/main.scss';

import { genData } from './utils';

// data should be an array of objects{name, values:[]}

class DemoGraph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: genData(props.columns, 0, 0, 1)};
	}
	componentDidMount() {
		setInterval(() => this.setState({data: genData(this.props.columns, this.props.dotsPerCol, 0, 1)}), 3000);
	}
	render() {
		return (
			<DotColumnGraph
				data={this.state.data}
				dividers={4}
				dividerLabels={true}
				dataTransitions={true}
				xLabel="X Axis Label"
				yLabel="Y Axis Label"
			/>
		);
	}
}

render(<DemoGraph columns={6} dotsPerCol={50}/>,document.getElementById('graphEl'));