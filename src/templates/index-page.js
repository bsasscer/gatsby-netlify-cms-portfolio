import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

export const IndexPageTemplate = ({ title }) => (
    <div>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-centered">Large title</h1>
                    <h2 className="subtitle has-text-centered">
                        Large subtitle
                    </h2>
                </div>
            </div>
        </section>
        <Projects />
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
