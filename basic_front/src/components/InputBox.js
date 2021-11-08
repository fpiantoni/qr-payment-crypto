import React from 'react'

class InputBox extends React.Component{
    getValaue = (event) => {
        console.log('Event: ', event.target.value);

        this.setState({value: event.target.value})
    }

    handleClick = (event) => {
        event.preventDefault();
        const value = this.state.value;
        //console.log('Value enter and post: ', value);

        fetch('http://[::1]:3000/amounts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'}, //solucionado este error? ahora salta un 422
            body: JSON.stringify(value),
        }).then(() => {
            console.log('Value enter and post: ', value);
        })
    }
    

    render() {
        console.log('State: ', this.state);
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Input Amount</h1>
                    <input type="number" onChange={this.getValaue}/>
                    <button onClick = {this.handleClick}>submit</button>
                </form>
            </div>
        );
    }
}
export default InputBox