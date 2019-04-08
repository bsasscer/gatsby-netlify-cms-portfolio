import React from 'react';

import Layout from '../components/Layout';
import Projects from '../components/Projects';

export default class ProjectsIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Projects />
            </Layout>
        );
    }
}
