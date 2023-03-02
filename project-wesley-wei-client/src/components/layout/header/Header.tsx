import React from 'react';
import './styles/Header.css';

interface IHeader {
    children?: React.ReactNode;
    position?: "top-left-abs" | "top-right-abs" |
    "bottom-left-abs" | "bottom-right-abs";
}

const Header: React.FC<IHeader> = ({ children, position }) => {
    return (
        <header className={`app-header${position ? '' + position : ''}`}>
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