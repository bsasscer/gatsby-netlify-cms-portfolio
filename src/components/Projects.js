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
                        <li className="hover-item project-item" key={post.id}>
                            <Link to={post.fields.slug}>
                                <h3 className="project-title">
                                    <span className="serif-type">
                                        {post.frontmatter.title}
                                        &nbsp;&mdash;&nbsp;
                                    </span>
                                    <span className="project-date date">
                                        {post.frontmatter.date}
                                    </span>
                                </h3>
                                <img
                                    src={
                                        post.frontmatter.previewImage.image
                                            .publicURL
                                    }
                                    className="hover-image-show preview-image"
                                    alt={post.frontmatter.previewImage.alt}
                                />
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
        render={(data, count) => <Projects data={data} count={count} />}
    />
);
