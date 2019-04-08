import React from 'react';

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="copyright">
                    <span>2019 Bianca Sasscer</span>
                </div>
                <div className="social">
                    <a
                        href="https://github.com/bsasscer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                    <a
                        href="https://github.com/bsasscer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        kofi
                    </a>
                    <a
                        href="https://github.com/bsasscer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        dribbble
                    </a>
                    <a
                        href="https://github.com/bsasscer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        email
                    </a>
                </div>
            </footer>
        );
    }
};

export default Footer;
