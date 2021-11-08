import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            Amount:'',
        }
    }
     
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://[::1]:3000/amounts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const axios = require('axios');

    async function makeGetRequest() {

    let postdata = { amount: amount};

    let res = await axios.post('http://[::1]:3000/amounts', postdata);

    let data = res.data;
    console.log(data);
}

makeGetRequest();
  
    render() {
        const {amount} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <div>
                            <h1>Input Amount</h1>
                        </div>
                        <input 
                            type="number" 
                            name="Amount" 
                            value={amount} 
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button>SubmitPost</button>
                </form>
            </div>
        )
    }
}

export default PostForm
 