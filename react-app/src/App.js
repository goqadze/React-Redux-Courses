import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
	render(){
		let txt = this.props.txt;
		return (
			<div>
				<p>{txt}</p>
				<h1>Hello World</h1>
				<b>Bold</b>
			</div>
		)
	}
}


App.propTypes = {
	txt: PropTypes.string,
	cat: PropTypes.number.isRequired,
}

App.defaultProps = {
	txt: "this is the default text"
}

export default App;
