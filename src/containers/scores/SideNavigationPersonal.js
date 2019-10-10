import React from "react";
import EventFilterPersonal from "./EventFilterPersonal";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StatsContainer from "../home/StatsContainer";

export default function SideNavigation(props) {

    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col sm={3}>
                        <EventFilterPersonal expanded={true}/>
                    </Col>
                    <Col sm={9}>
                        <StatsContainer title={"Personal Savings"} co2E={"14.4"} kwh={"16.27"} money={"2.88"}/>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


