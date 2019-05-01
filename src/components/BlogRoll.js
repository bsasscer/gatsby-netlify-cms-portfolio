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
                            <div className="hover-item post-item" key={post.id}>
                                <Link to={post.fields.slug}>
                                    <div className="cell-left">
                                        <p>{post.frontmatter.category}</p>
                                    </div>
                                    <div className="cell-middle">
                                        <p>{post.frontmatter.title}</p>
                                    </div>
                                    <div className="cell-right">
                                        <p>{post.frontmatter.date}</p>
                                    </div>
                                    <img
                                        src={
                                            post.frontmatter.previewImage.image
                                                .publicURL
                                        }
                                        className="hover-item-show"
                                        alt={post.frontmatter.previewImage.alt}
                                    />
                                </Link>
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
                                category
                                previewImage {
                                    alt
                                    image {
                                        publicURL
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
);
