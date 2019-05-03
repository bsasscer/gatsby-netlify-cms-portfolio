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
                            <div className="post-item reveal">
                                <Link
                                    to={post.fields.slug}
                                    className="inner"
                                    key={post.id}
                                >
                                    <div className="image-con">
                                        <div
                                            className="image-bg"
                                            style={{
                                                backgroundColor: `${
                                                    post.frontmatter.color
                                                }`
                                            }}
                                        />
                                        <div
                                            className="preview-image"
                                            style={{
                                                backgroundImage: `url(${
                                                    post.frontmatter
                                                        .previewImage.image
                                                        .publicURL
                                                })`,
                                                backgroundSize: `cover`,
                                                backgroundPosition: `50% 50%`,
                                                backgroundRepeat: `no-repeat`,
                                                minHeight: `300px`
                                            }}
                                        />
                                    </div>
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
                                date(formatString: "MMM DD")
                                category
                                color
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
