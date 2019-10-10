import React, { Component } from 'react';
import LoginNavigationBar from "./login/LoginNavigationBar";
import Footer from "./Footer";
import {Link} from "react-router-dom";

class Page404 extends Component {
    render() {
        return (
            <div>
                <LoginNavigationBar/>
                <div style={{
                    textAlign: 'center',
                    paddingTop: '10%'
                }}>
                    <h3>Oooops, link not found!</h3>
                    <Link to="/">Return to Home Page</Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Page404;