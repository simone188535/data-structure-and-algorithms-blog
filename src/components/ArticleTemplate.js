import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ArticleTemplate = (props) => {

    return (
        <Container fluid className="all-article-page-container">
            <Row className="header text-center">
                <Col>
                    <div className="home-link"><a href="/">Back to home</a></div>
                    <h2 className="main-head">{props.title}</h2>
                </Col>
            </Row>
            <Container className="article-section">
                {props.body}
            </Container>
        </Container>
    );
}

export default ArticleTemplate;