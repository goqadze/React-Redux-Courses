import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{

	constructor(){
		super();
		this.state = {increasing: false}
		this.update = this.update.bind(this)
	}

	update(e){
		ReactDom.render(
			<App val={this.props.val + 1} />,
			document.getElementById('root')
		)
	}
	
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		this.setState({increasing: nextProps.val > this.props.val})
	}
	
	shouldComponentUpdate(nextProps, nextState){
		return nextProps.val % 5 === 0;
	}
	
	render(){
		console.log(this.state.increasing)
		return (
			<button onClick={this.update}>
				{this.props.val}
			</button>
		)
	}

	componentDidUpdate(prevProps, prevState){
		console.log(`prevProps:`, prevProps);
	}
}

App.defaultProps = {val: 0}

export default App;
