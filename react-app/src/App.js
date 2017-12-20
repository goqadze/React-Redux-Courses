import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{

	constructor(){
		super();
		this.state = {val: 0}
		this.update = this.update.bind(this)
		console.log("constructor");
	}
	
	update(e){
		this.setState({
			val: this.state.val + 1
		})
	}

	componentWillMount(){
		console.log("componentWillMount");
	}

	render(){
		console.log("render");
		return <button onClick={this.update}>{this.state.val}</button>
	}
	
	componentDidMount(){
		console.log("componentDidMount");
	}
	
	componentWillUnmount(){
		console.log("componentWillUnmount");
	}
}

class Wrapper extends React.Component{
	mount(){
		ReactDom.render(<App />, document.getElementById('a'))
	}
	
	unmount(){
		ReactDom.unmountComponentAtNode(document.getElementById('a'))
	}
	
	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper;
