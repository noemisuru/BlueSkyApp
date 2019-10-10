import React from "react";
import LeaderGrid from "LeaderGrid"
import Footer from "../containers/Footer";
import NavigationBar from "../containers/NavigationBar";

export default class LeaderBoard extends React.Component{

    render() {
        return (
            <div>
                <NavigationBar/>
                <div>
                    <LeaderGrid />
                </div>
                <Footer/>
            </div>
        );
    }
}


