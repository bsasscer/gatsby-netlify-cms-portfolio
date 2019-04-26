import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div className="container">
                <div className="post-list">
                    {posts &&
                        posts.map(({ node: post }) => (
                            <div className="post-item" key={post.id}>
                                <div className="cell-left">
                                    <p>Circle</p>
                                </div>
                                <div className="cell-middle">
                                    <p>
                                        <Link to={post.fields.slug}>
                                            {post.frontmatter.title}
                                        </Link>
                                    </p>
                                    {/* <p>{post.excerpt}</p> */}
                                </div>
                                <div className="cell-right">
                                    <p>{post.frontmatter.date}</p>
                                    {/* <Link
                                    className="btn-link"
                                    to={post.fields.slug}
                                >
                                    KEEP READING
                                </Link> */}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export default () => (
    <StaticQuery
        query={graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "blog-post" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 100)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "DD MMM YYYY")
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
);
