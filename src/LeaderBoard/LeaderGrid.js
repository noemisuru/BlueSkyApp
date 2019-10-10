import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import React from 'react';
import NavigationBar from "../containers/NavigationBar"
import Footer from "../containers/Footer";

export default class LeaderGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "Name", field: "name"
                },{
                headerName: "CO2 Emissions Saved", field: "co2"
            }, {
                headerName: "Energy Savings", field: "savings"
            },{
                headerName: "Price Savings", field: "price"
            }],
            rowData: [{
                name:"Tom", co2: "0.9g", savings:"1kj",price: "£350"
            },{
                name:"Noemi", co2: "0.8g", savings:"0.81kj",price: "£290"
            },{
                name:"Steve", co2: "0.7g", savings:"0.7kj",price: "£260"
            }]
        }
    };

    render() {
        return (
            <div>
                <NavigationBar name={"Noemi"}/>
            <div style={{ maxWidth:"800px", marginTop:"80px", marginButtom:"50px", height:"125px", textAlign:"center", marginLeft:"20%" }} className="ag-theme-balham">
                <h1 style={{textAlign:'center'}}>My Team's Savings</h1>
                <AgGridReact 
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
            <Footer/></div>
        );
    }
}