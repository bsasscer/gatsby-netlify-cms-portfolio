import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import coffee from '../img/social/coffee.svg';
import dribbble from '../img/social/dribbble.svg';
import envelope from '../img/social/envelope-o.svg';
import github from '../img/github.svg';

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer has-background-black has-text-white-ter">
                <div className="content has-text-centered">
                    <img
                        src={logo}
                        alt="Bianca Sasscer"
                        style={{ width: '14em', height: '10em' }}
                    />
                </div>
                <div className="content has-text-centered has-background-black has-text-white-ter">
                    <div className="container has-background-black has-text-white-ter">
                        <div className="columns">
                            <div className="column is-4">
                                <section className="menu">
                                    <ul className="menu-list">
                                        <li>
                                            <Link
                                                to="/"
                                                className="navbar-item"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="navbar-item"
                                                to="/about"
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="navbar-item"
                                                to="/products"
                                            >
                                                Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="navbar-item"
                                                to="/contact/examples"
                                            >
                                                Form Examples
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                className="navbar-item"
                                                href="/admin/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Admin
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-4">
                                <section>
                                    <ul className="menu-list">
                                        <li>
                                            <Link
                                                className="navbar-item"
                                                to="/blog"
                                            >
                                                Latest Stories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="navbar-item"
                                                to="/contact"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-4 social">
                                <a
                                    className="navbar-item"
                                    href="https://github.com/bsasscer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon">
                                        <img src={github} alt="Github" />
                                    </span>
                                </a>
                                <a
                                    className="navbar-item"
                                    href="https://github.com/bsasscer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon">
                                        <img src={coffee} alt="Kofi" />
                                    </span>
                                </a>
                                <a
                                    className="navbar-item"
                                    href="https://github.com/bsasscer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon">
                                        <img src={dribbble} alt="Dribbble" />
                                    </span>
                                </a>
                                <a
                                    className="navbar-item"
                                    href="https://github.com/bsasscer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon">
                                        <img src={envelope} alt="Email" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;
