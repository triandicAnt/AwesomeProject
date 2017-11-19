// Counter component class
// has count state 
// props consist of color and size
// the render component consist of Text block


import React from 'react';
import {Text} from 'react-native';

class Counter extends React.Component {
	
	state = {count : 0}
	
	componentDidMount(){
		setInterval(() =>{
			this.setState({count: this.state.count + 1})
		}, 1000)
	}

	render() {
		const {count} = this.state
		const {color, size} = this.props

		return (
			<Text style = {{color, fontSize: size}}>
				{count}
			</Text>

		)
	}
}

module.exports = Counter;
