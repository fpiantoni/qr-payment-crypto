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

    /*componentDidMount() {
        axios.get(URL_amounts)
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    */
  getJsonData = () => {
    fetch(URL_amounts, 
        {method: 'GET'}).then((response) => response.json())
           .then((responseJson) => {
               console.log(responseJson);
               this.setState({
                   data: responseJson
               })
            })
           .catch((error) => {
               console.log(error)
            });
    }

    componentDidMount = () => {
        this.getJsonData()
    }
    


    render() {
        const { posts } = this.state
        return (
            <div>
                Valor almacenados
              
            </div>
        )
    }
}

export default PostList