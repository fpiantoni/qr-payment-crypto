import React from "react";
import InputBox from "./components/InputBox";
import PostList from "./components/PostList";

class App extends React.Component{

    render() {
        console.log('State: ', this.state);
        return(
            <div className="App">
                <header className = "App-Header">
                    <img src="/images/baas.jpeg" className="App-logo" alt="logo" />
                </header>
                <InputBox/>
                <PostList/>
            </div>
        );
    }
}
export default App