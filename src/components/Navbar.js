import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: ''
        };
    }

    render() {
        return (
            <header className="main-header">
                <Link to="/" className="site-logo" title="Logo">
                    <img src={logo} alt="Bianca Sasscer" />
                </Link>
                <ul className="nav">
                    <Link to="/projects">Projects</Link>
                    <Link to="/blog">Posts</Link>
                    <Link to="/about">About</Link>
                    <Link to="#">Contact</Link>
                </ul>
            </header>
        );
    }
};

export default Navbar;
