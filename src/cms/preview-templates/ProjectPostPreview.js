import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPostTemplate } from '../../templates/project-post';

const ProjectPostPreview = ({ entry, widgetFor, getAsset }) => (
    <ProjectPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        previewImage={{
            image: getAsset(entry.getIn(['data', 'previewImage', 'image'])),
            alt: entry.getIn(['data', 'previewImage', 'alt'])
        }}
        circle={entry.getIn(['data', 'image'])}
    />
);

ProjectPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    widgetFor: PropTypes.func,
    getAsset: PropTypes.func
};

export default ProjectPostPreview;
