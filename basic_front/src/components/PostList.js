import React, { Component } from 'react'

let contador;
let amount;
const URL_counts = 'http://[::1]:3000/amounts/count';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

  getCountJsonData = () => {
    fetch(URL_counts, 
        {method: 'GET'}).then((response) => response.json())
           .then((responseJson) => {
               contador = responseJson.count;
               console.log(contador);

                    const URL_amount = 'http://[::1]:3000/amounts/' + contador;
                    console.log(URL_amount);
                    fetch(URL_amount)
                            .then((response) => response.json())
                            .then((responseJson) => {
                                amount = responseJson.amount;
                                console.log(responseJson);
                                console.log(amount);
                                    this.setState({
                                        data: responseJson
                                    })
                                })
                                .catch((error) => {
                                    console.log(error)
                                });
               this.setState({
                   data: responseJson
               })
            })
           .catch((error) => {
               console.log(error)
            });
  
        
    }
   /* 
    getAmountJsonData = () => {
        console.log(contador);
        const URL_amount = 'http://[::1]:3000/amounts/'+ contador;
        fetch(URL_amount  ).then((response) => response.json())
               .then((responseJson) => {
                   amount = responseJson.amount;
                   console.log(responseJson);
                   this.setState({
                       data: responseJson
                   })
                })
               .catch((error) => {
                   console.log(error)
                });
        }
    */
        componentDidMount = () => {
            this.getCountJsonData()
            //this.getAmountJsonData()
        }

    render() {
        return (
            <section>
               
            </section>
        )
    }
}

export default PostList