import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class Projects extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <ul className="projects-list">
                {posts &&
                    posts.map(({ node: post }) => (
                        <li className="project-item" key={post.id}>
                            <Link
                                to={post.fields.slug}
                                className="project-link"
                            >
                                <h2 className="title">
                                    {post.frontmatter.title}
                                </h2>
                                <span className="date">
                                    {post.frontmatter.date}
                                </span>
                            </Link>
                        </li>
                    ))}
            </ul>
        );
    }
}

Projects.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export default () => (
    <StaticQuery
        query={graphql`
            query ProjectsQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "project-post" } }
                    }
                ) {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMM YYYY")
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <Projects data={data} count={count} />}
    />
);
