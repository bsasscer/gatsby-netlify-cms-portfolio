import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ title }) => (
    <div className="home">
        <div className="salutations">
            <h3>{title}</h3>
            <div>
                <Link to="/projects" className="button">
                    SEE PROJECTS
                </Link>
            </div>
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
