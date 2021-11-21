//import logo from './logo.svg';
import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
	if(event.reset) {
		return {
			
			name: '',
			symbol: '',
			description: '',
			
		}
	}
	return {
		...state,
		[event.name]: event.value
	}
}


function App() {

	const [submitting, setSubmitting] = useState(false);
	const handleSubmit = event => {
		event.preventDefault();
		setSubmitting(true);
		
		fetch('http://localhost:8000/api/coins', {
			method: 'POST',
			// We convert the React state to JSON and send it as the POST body
			headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
			body: JSON.stringify({ name : this.state.name, symbol : this.state.symbol, description : this.state.description  })
		}).then(function(response) {
			console.log(response)
			return response.json();
		});
		
	}
	
	const handleChange = event => {
		this.setState({
            name: event.target.value
        })
	}

	
	return (
		/* <div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React</a>
			</header>
		</div> */
		<div className="wrapper">
			<h1>Add Coins</h1>
			<form onSubmit={handleSubmit}>
				<fieldset >
					<label>
						<p>Name</p>
						<input name="name" onChange={handleChange} value={this.state.name} />
					</label>
					<label>
						<p>Symbol</p>
						<input name="symbol" onChange={handleChange} value={this.state.symbol} />
					</label>
					<label>
						<p>Description</p>
						<input name="description" onChange={handleChange} value={this.state.description} />
					</label>
				</fieldset>
				<button type="submit" >Submit</button>
			</form>
		</div>
	);
}

export default App;
