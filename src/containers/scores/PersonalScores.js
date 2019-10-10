import React from 'react';
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import SideNavigationPersonal from "./SideNavigationPersonal";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
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
                <div style={{backgroundImage:"url(https://www.psychologicalscience.org/redesign/wp-content/uploads/2019/03/Observer-Online-April2019-EducatingSustainability-Big-1.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backdropFilter:"opacity(20%)",
                    width:"100%",
                    top:"10px"
                }}>
                    <div style={{backgroundColor:"rgba(255, 255, 255,0.8)",  paddingTop:"10px", height:"100%", marginTop:"50px", paddingBottom:"70px"}}>
                        <div>
                            <SideNavigationPersonal/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default HomePage;