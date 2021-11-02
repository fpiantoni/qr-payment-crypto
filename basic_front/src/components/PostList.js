import React, { Component } from 'react'
import axios from 'axios'

let URL_amounts = 'http://[::1]:3000/amounts';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(URL_amounts)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                List of Amount Of transactions
            </div>
        )
    }
}

export default PostList