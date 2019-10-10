import React from 'react';
import LoginForm from "./LoginForm";
import LoginNavigationBar from "./LoginNavigationBar"
import Footer from "../Footer"

class LoginContainer extends React.Component  {
    render() {
        return (
            <div>
                <LoginNavigationBar/>
                <LoginForm/>
                <Footer/>
            </div>
        );
    }
}

export default LoginContainer;