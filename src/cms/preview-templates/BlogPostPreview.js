import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => (
    <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        category={entry.getIn(['data', 'category'])}
        previewImage={{
            image: getAsset(entry.getIn(['data', 'previewImage', 'image'])),
            alt: entry.getIn(['data', 'previewImage', 'alt'])
        }}
    />
);

BlogPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func,
    getAsset: PropTypes.func
};

export default BlogPostPreview;
