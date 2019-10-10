import React from 'react';
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import SideNavigation from "./SideNavigation";
import StatsContainer from "./StatsContainer";
import "../../styles/HomePage.css";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true,
            IBticked: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <div>
                <NavigationBar name={"Noemi"}/>
            <div style={{backgroundImage:"url(https://mapsvg.com/mapsvg/maps/not-calibrated/world_with_states.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                width:"100%",
                top:"10px"
            }}>
                <div style={{backgroundColor:"rgba(255, 255, 255,0.8)", paddingTop:"10px", height:"100%", marginTop:"50px", paddingBottom:"20px"}}>
                <SideNavigation tick={this.state.IBticked}/>
                </div>
                <Footer/>
            </div>
        </div>
        );
    }
}

export default HomePage;