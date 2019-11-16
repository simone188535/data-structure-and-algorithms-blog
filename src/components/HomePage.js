import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import _ from 'lodash';
import homePageBlogsArray from '../js/all-blocks';

const HomePage = () => {

    const mapBlog = () => {

        let homePageBlogs = _.map(homePageBlogsArray, (value, key) => {
            let { DSOrA, Link, Header, Description } = value;
            return (
                <section key={key}>
                    <article>
                        <h3 className="header">
                            <a href={Link}>{Header}</a>
                        </h3>
                        <div className="type">
                            <p>Type: {DSOrA}</p>
                        </div>
                        <div className="description">
                            <p>Goal: {Description}</p>
                        </div>
                        <hr />
                    </article>
                </section>
            );
        });
        return homePageBlogs;
    }
    return (
        <div className="homepage-container">
            <div className="homepage-hero vh-100">
                <Jumbotron fluid >
                    <Container className="hero-text-container">
                        <h1>Data Structure<br /> and Algorithm</h1>
                        <p>As javascript becomes more of a staple in software development, I find it increasingly important to document common software development problems in the language its self.
                            In laymans terms, the purpose of this blog is to provide javascript solutions for traditional D.S. and A. questions that would typically be written in Java or C++. I am also writing this blog for the added of bonus practicing these solutions myself (and to become more appealing to potential employers <span role="img" aria-label="smirk-emoji">&#128521;</span>).
                            I hope this can be of use to both myself and others in search of both knowledge and skill in regards to software-development based javascript.
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <Container className="homepage-body">
                {mapBlog()}
            </Container>
        </div>);

}

export default HomePage;