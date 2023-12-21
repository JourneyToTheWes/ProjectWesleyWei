import React from 'react';
import './styles/Header.css';

interface IHeader {
    children?: React.ReactNode;    
    position?: "fixed" | "sticky"
    placement?: "top-left" | "top-right" |
    "bottom-left" | "bottom-right"; // May require a position prop in order for placement to work
    bgImageSrc?: string; // src of bg image to use on header
    className?: string;
}

const Header: React.FC<IHeader> = ({ children, position, placement, bgImageSrc, className }) => {
    return (
        <header
            className={
                `app-header${position ? ' ' + position : ''}
                ${className ? ' ' + className : ''}
                ${placement ? ' ' + placement : ''}`
            }
            style={{
                backgroundImage: bgImageSrc
                    ? `url(${require(`images/${bgImageSrc}`)})`
                    : 'none'
            }}
        >
            <div>
                <img
                    className="logo"
                    // We can use absolute path here because of tsconfig.json
                    // configuration "src" baseUrl
                    src={require('images/WestWay.JPG')}
                    alt="West Way Logo"
                    onClick={ () => window.location.href = '/' }
                />
                { children && children }
            </div>
        </header>
    );
};

export default Header;