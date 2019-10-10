import React from "react";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StatsContainer from "./StatsContainer";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Checkbox from "@material-ui/core/Checkbox";

export default function SideNavigation(props) {

    const [state, setState] = React.useState({
        checkedA_US: true,
        checkedA_EMEA: true,
        checkedA_ASIA: true,
        checkedB_CB:true,
        checkedB_IB:true,
        checkedB_PB:true,
        checkedB_DWS:true,
        checkedB_INFR:true,
        checkedB_TECH:true,
        noneUnticked:true
    });

    const check = (noneUnticked) => {
        if (noneUnticked) {
            return(
            <StatsContainer title={"Corporate Savings"} co2E={"10,463"} kwh={"9,259"} money={"47.2m"}/>);
        }
        else {
            return(
            <StatsContainer title={"Corporate Savings"} co2E={"6,589"} kwh={"4,689"} money={"31.5m"}/>);
        }
    }

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked, noneUnticked:false}
    );
    };

    return (
        <div>
            <Container fluid={true} style={{left:'0'}}>
                <Row>
                    <Col sm={3}>

                        <div>
                        <ExpansionPanel expanded={true} >
                        <ExpansionPanelSummary>
                        <Typography style={{fontWeight:'bold'}}>
                        Filter by Regions
                        </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <div>
                        <Checkbox checked={state.checkedA_US}
                        value="checkedA_US"
                        onChange={handleChange('checkedA_US')}/> US <br/>
                        <Checkbox checked={state.checkedA_EMEA}
                        value="checkedA_EMEA"
                        onChange={handleChange('checkedA_EMEA')}/> EMEA <br/>
                        <Checkbox checked={state.checkedA_ASIA}
                        value="checkedA_ASIA"
                        onChange={handleChange('checkedA_ASIA')}/> ASIA
                        </div>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={true} >
                        <ExpansionPanelSummary>
                        <Typography style={{fontWeight:'bold'}}>
                        Filter by Business Lines
                        </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <div>
                        <Checkbox checked={state.checkedB_CB}
                        value="checkedB_CB"
                        onChange={handleChange('checkedB_CB')}/> Corporate Bank <br/>
                        <Checkbox checked={state.checkedB_IB}
                        value="checkedB_IB"
                        onChange={handleChange('checkedB_IB')}/> Investment Bank <br/>
                        <Checkbox checked={state.checkedB_PB}
                        value="checkedB_PB"
                        onChange={handleChange('checkedB_PB')}/> Private Bank <br/>
                        <Checkbox checked={state.checkedB_DWS}
                        value="checkedB_DWS"
                        onChange={handleChange('checkedB_DWS')}/> DWS <br/>
                        <Checkbox checked={state.checkedB_INFR}
                        value="checkedB_INFR"
                        onChange={handleChange('checkedB_INFR')}/> Infrastructure <br/>
                        <Checkbox checked={state.checkedB_TECH}
                        value="checkedB_TECH"
                        onChange={handleChange('checkedB_TECH')}/> Technology, Data and Innovation
                        </div>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>
                        </div>
                    </Col>
                    <Col sm={9}>
                        {check(state.noneUnticked)}
                    </Col>
                </Row>
            </Container>

        </div>
            )
}


