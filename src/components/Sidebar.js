import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';

const Sidebar = () => (
    <aside className="sidebar">
        <div className="sidebar_slim">
            <div className="logo-box">
                <Link to="/" className="site-logo" title="Logo">
                    b_
                </Link>
            </div>
        </div>
        <Navbar />
    </aside>
);

export default Sidebar;
