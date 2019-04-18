import React from 'react';
import { Link } from 'gatsby';

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
                <Link to="/" className="logo">
                    Bianca Sasscer
                </Link>
                <ul className="nav">
                    <li>
                        <Link to="/blog">Posts</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </header>
        );
    }
};

export default Navbar;
