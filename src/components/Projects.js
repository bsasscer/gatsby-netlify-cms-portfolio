import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class Projects extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div className="projects-list">
                {posts &&
                    posts.map(({ node: post }) => (
                        <Link
                            to={post.fields.slug}
                            className="ticket"
                            key={post.id}
                        >
                            <div className="ticket-top">
                                <div className="title">
                                    {post.frontmatter.title}
                                </div>
                                <span className="arrow">→</span>
                            </div>
                            <div className="ticket-middle">
                                <p className="excerpt">{post.excerpt}</p>
                            </div>
                            <div className="ticket-bottom">
                                <p className="date">{post.frontmatter.date}</p>
                            </div>
                        </Link>
                    ))}
            </div>
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
                            excerpt(pruneLength: 200)
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
