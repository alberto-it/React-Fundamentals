import React from "react";

const Header = () => {
    const imageUrl = 'https://picsum.photos/600/400';

    return (
        <header className="header">
            <img src={imageUrl} alt="Background Image" className="header-image" />
            <h1 className="header-name">Alberto Rodriguez</h1>
        </header>
    );
};

export default Header;