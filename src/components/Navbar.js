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
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/projects">
                            <span className="option-number">01</span>
                            <h3>Projects</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            <span className="option-number">02</span>
                            <h3>Posts</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span className="option-number">03</span>
                            <h3>About</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <span className="option-number">04</span>
                            <h3>Contact</h3>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
