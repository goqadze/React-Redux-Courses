import React from 'react';

class App extends React.Component{
	render(){
		//return <h1>Hello World</h1>
		return React.createElement('h1', null, 'Hello Jonh')
	}
}

//const App = () => <h1>Hey Dude!</h1>

export default App;
