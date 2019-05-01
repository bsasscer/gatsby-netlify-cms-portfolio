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

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: 'is-active'
                      })
                    : this.setState({
                          navBarActiveClass: ''
                      });
            }
        );
    };

    render() {
        return (
            <nav
                className="navbar is-fixed-top"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container nav-wrapper">
                    <div className="navbar-brand">
                        <Link to="/" className="logo navbar-item" title="Logo">
                            Bianca Sasscer
                        </Link>
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${
                                this.state.navBarActiveClass
                            }`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${
                            this.state.navBarActiveClass
                        }`}
                    >
                        <div className="navbar-end has-text-centered">
                            <Link
                                className="navbar-item"
                                activeClassName="is-active"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClassName="is-active"
                                to="/about"
                            >
                                About
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClassName="is-active"
                                to="/blog"
                            >
                                Blog
                            </Link>
                            <Link
                                className="navbar-item"
                                activeClassName="is-active"
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
