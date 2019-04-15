import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ title }) => (
    <div className="home">
        <div className="salutations">
            <span>
                <Link to="/about">
                    Hi, I'm Bianca. I'm a front end developer living the design
                    life in San Diego&mdash;
                </Link>
            </span>
            <span>
                <Link to="/projects">
                    I enjoy combining the art of design with the art of
                    programming in Projects&mdash;
                </Link>
            </span>
            <span>
                <Link to="/blog">I occasionally Post&mdash;</Link>
            </span>
            <span />
        </div>
    </div>
);

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <IndexPageTemplate title={frontmatter.title} />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
            }
        }
    }
`;
