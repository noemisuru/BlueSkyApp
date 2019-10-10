import React from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EuroIcon from '@material-ui/icons/Euro';

const styles = {
    title: {
        color: "green",
        marginTop: "15%",
        marginBottom: "10%",
        fontWeight: "bold"
    },
    metrics: {
        color: "green",
        marginTop: "5%",
        marginBottom: "5px",
        fontSize:"25px"
    }
}

export default function StatsContainer(props) {
    return (
        <div style={{textAlign:"center",fontSize:"30px", marginLeft:"-20px", marginTop:"-60px"}}>
            <h2 style={styles.title}>{props.title}</h2>
            <div >
                <h3 style={styles.metrics}>CO2 Emission reduction of {props.co2E} lbs</h3>
                <h3 style={styles.metrics}>Electricity saved {props.kwh} kwh </h3>
                <h3 style={styles.metrics}>{'\u20AC'} {props.money} saved to enable re-investment</h3>
            </div>
        </div>
    );
}