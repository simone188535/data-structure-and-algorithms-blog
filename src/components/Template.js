import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Template = () => {

    return (
        <Container fluid className="all-article-page-container">
            <Row className="header text-center">
                <Col>
                    <div className="home-link"><a href="#">Back to home</a></div>
                    <h2 className="main-head">Title</h2>
                </Col>
            </Row>
            <Container className="article-section vh-100">
                Testing
            </Container>
        </Container>
    );
}

export default Template;