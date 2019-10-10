import React from "react";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

export default class LearnMore extends React.Component {
    render()
    {
        return (
            <div>
                <NavigationBar name={"Noemi"}/>
                <h1 style={{textAlign: 'center', marginTop:"70px",color: "rgb(245, 0, 87)", fontSize:"40px", marginBottom:"35px"}}>Mission Statement</h1>
                <p style={{color: "rgb(0, 120, 30)", textAlign:"center", fontSize:"30px",fontStyle:"italic"}}>"We aim to collectively and collaboratively improve the health of
                    our planet and provide effective measures to reduce your Carbon Footprint and be the change the
                    World needs.</p>
                <p style={{color: "rgb(0, 120, 30)", fontSize: "30px", textAlign:"center",fontStyle:"italic" }}>We will assist to locate green/Eco stores in your
                    location and recommend green businesses to trade with." </p>
                <Footer/>
            </div>
        );
    }
}