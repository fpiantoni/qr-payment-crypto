import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            Amount:[],
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
  
    render() {
        const {Amount} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <div>
                            <h1>Input Amount</h1>
                        </div>
                        <input 
                            type="string" 
                            name="Amount" 
                            value={Amount} 
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button onClick>SubmitPost</button>
                </form>
            </div>
        )
    }
}

export default PostForm
 