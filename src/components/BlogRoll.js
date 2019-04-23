import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class BlogRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div className="columns is-multiline">
                {posts &&
                    posts.map(({ node: post }) => (
                        <div className="is-parent column is-6" key={post.id}>
                            <article className="tile is-child box notification">
                                <p>
                                    <Link
                                        className="headline-text"
                                        to={post.fields.slug}
                                    >
                                        {post.frontmatter.title}
                                    </Link>
                                    <span className="date">
                                        {post.frontmatter.date}
                                    </span>
                                </p>
                                <p className="summary-text">
                                    {post.excerpt}
                                    <br />
                                    <br />
                                </p>
                                <Link className="btn" to={post.fields.slug}>
                                    KEEP READING
                                </Link>
                            </article>
                        </div>
                    ))}
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
                            excerpt(pruneLength: 200)
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
