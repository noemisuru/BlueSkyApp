import NavigationBar from "../NavigationBar";
import React from "react";
import Footer from "../Footer";
import ProgressBar from "react-bootstrap/ProgressBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "@material-ui/core/Container";
import DropdownSelectAction from "./DropdownSelectAction";

const nowCO2 = 60;
const nowKwh = 30;
const nowEuro = 50;

const progressCO2 = <ProgressBar animated now={nowCO2} variant="success" label={`${nowCO2}%`} />;
const progressKwh = <ProgressBar animated now={nowKwh} variant="success" label={`${nowKwh}%`} />;
const progressEuro = <ProgressBar animated now={nowEuro} variant="success" label={`${nowEuro}%`} />;

const styles = {
    mainContainer: {
        marginTop:'100px',
        paddingLeft:'10%',
        paddingRight:'10%',
    },
    rows: {
        marginTop: '20px',
        fontSize:'20px',
        marginBottom: '20px',
        height:'50px'
    },
    recomText: {
        textAlign:'center',
        fontSize:'20px',
        fontStyle:'italic',
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'15%'
    }
}

export default class Goals extends React.Component {

    render() {
        return (
            <div>
                <NavigationBar name={"Noemi"}/>
                <Container style={styles.mainContainer}>
                    <h1 style={{textAlign:'center'}}>My progress</h1>
                    <p style={{fontSize:'20px'}}>Filter by activity type:</p>
                    <DropdownSelectAction/>
                    <br/><br/>
                    <Row style={styles.rows}>
                        <Col xs={6}>
                        My progress on CO2 Emission reduction target:</Col>
                        <Col xs={6}>
                            {progressCO2}
                        </Col>
                    </Row>
                    <Row style={styles.rows}>
                        <Col xs={6}>
                            My progress on kwh consumption reduction target:</Col>
                        <Col xs={6}>
                            {progressKwh}
                        </Col>
                    </Row>
                    <Row style={styles.rows}>
                        <Col xs={6}>
                            My progress on euro spend reduction target:</Col>
                        <Col xs={6}>
                            {progressEuro}
                        </Col>
                    </Row>
                    <h1 style={{textAlign:'center'}}>Recommendations</h1>
                    <Row>
                        <Col xs={3}>
                            <img src="https://i.etsystatic.com/14354991/r/il/917eca/1442241371/il_1588xN.1442241371_k07v.jpg" width="100%"/>
                        </Col>
                        <Col xs={9} style={styles.recomText}>
                            Try to go veggie for a week!
                        </Col>
                        <Col xs={9} style={styles.recomText}>
                            Why not switch to a re-usable water bottle?
                        </Col>
                        <Col xs={3}>
                            <img src="https://www.ececology.com/wp-content/uploads/2019/03/BOTTLE-LINE-UP.jpg" width="100%"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5aG20WVsKbgZZ1wnQBs2_xhdV7rN_VX8542ael39CNo4Xd163" width='100%'/>
                        </Col>
                        <Col xs ={9} style={styles.recomText}>
                            Have you tried cycling to work?
                        </Col>
                    </Row>
                </Container>

                <Footer/>
            </div>
        );
    }
}
