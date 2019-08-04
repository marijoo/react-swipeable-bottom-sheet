import React, { Component } from 'react';
import PropTypes from 'prop-types';

import window from 'global';

class HeightUpdater extends Component {
	constructor(props){
		super(props);

		this.onWindowResize = this.onWindowResize.bind(this);
	}

	onWindowResize(){
		const height = window.innerHeight;
		if(height !== this.props.height){
			this.props.onHeightChange(height);
		}
	}

	componentWillMount(){
        if (window.addEventListener)
		      window.addEventListener('resize', this.onWindowResize);
	}

	componentWillUnmount(){
        if (window.removeEventListener)
    		window.removeEventListener('resize', this.onWindowResize);
	}

	render(){
		return null;
	}
}

HeightUpdater.propTypes = {
	height: PropTypes.number,
	onHeightChange: PropTypes.func
};

export default HeightUpdater;
