import React from "react";
import InputBox from "./components/InputBox";
//import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
//import { amount } from "./components/PostList"

class App extends React.Component{

    render() {
        console.log('State: ', this.state);
        return(
            <div className="App">
                <header className = "App-Header">
                    <img src="/images/baas.jpeg" className="App-logo" alt="logo" />
                </header>
                <InputBox/> 
                {/* <PostForm/> */}
                <PostList/>
                
            </div>
        );
    }
}
export default App