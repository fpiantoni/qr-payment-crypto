import React, { Component, useState } from 'react'
import axios from 'axios'

let URL_amounts = 'http://[::1]:3000/amounts/count';
let contador;
/*
const [amounts, setCounts] = useState([]);

function fetchamountcount() {
    fetch(URL_amounts).then(response => {
        response.json();
    }).then(data => {
        setCounts(data.count);
    });
}
*/

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    
    /*
    componentDidMount() {
        axios.get(URL_amounts)
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    } */

  getJsonData = () => {
    fetch(URL_amounts, 
        {method: 'GET'}).then((response) => response.json())
           .then((responseJson) => {
               contador = responseJson.count;
               console.log(contador);
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
            <section>
               
            </section>
        )
    }
}

export default PostList