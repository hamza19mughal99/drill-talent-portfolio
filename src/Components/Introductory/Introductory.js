import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from 'react-player'
import IntroductoryVideo from "../../assets/introduction_video.mp4";

const Introductory = () => {
    return (
        <div className="main_intro">
            <h1 className="section_heading">Introductory Video</h1>

            <Container>
                <Row className="justify-content-center">
                    <Col md={10} className={"d-flex justify-content-center"}>
                        <ReactPlayer url={IntroductoryVideo} controls={true} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Introductory