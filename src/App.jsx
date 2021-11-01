import React from "react";

class App extends React.Component{
    getValaue = (event) => {
        console.log('Event: ', event.target.value);

        this.setState({value: event.target.value})
    }

    handleClick = (event) => {
        event.preventDefault();
        const value = this.state.value;

        console.log('Value on Enter: ', value);
    }

    render() {
        console.log('State: ', this.state);
        return(
            <div className="App">
                <header className = "App-Header">
                    <img src="/images/baas.jpeg" className="App-logo" alt="logo" />
                </header>
                <h1>Input Amount</h1>
                <input type="number" onChange={this.getValaue}/>
                <button onClick = {this.handleClick}>enter</button>
            </div>
        );
    }
}
export default App