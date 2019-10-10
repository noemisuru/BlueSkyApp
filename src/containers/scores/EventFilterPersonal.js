import React from "react";
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ControlledExpansionPanels(props) {

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };


    const [state, setState] = React.useState({
        checkedC_T: true,
        checkedC_F: true,
        checkedC_C: true
    });

    return (
        <div>
            <ExpansionPanel expanded={props.expanded} >
                <ExpansionPanelSummary>
                    <Typography style={{fontWeight:'bold'}}>
                        Filter by Actions
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Checkbox value="checkedC_T"
                                  checked={state.checkedC_T}
                                  onChange={handleChange('checkedC_T')}/> Travel <br/>
                        <Checkbox value="checkedC_F"
                                  checked={state.checkedC_F}
                                  onChange={handleChange('checkedC_F')}/> Food <br/>
                        <Checkbox value="checkedC_C"
                                  checked={state.checkedC_C}
                                  onChange={handleChange('checkedC_C')}/> Corporate
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}


