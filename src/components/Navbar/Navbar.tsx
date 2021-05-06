import React, { ReactElement } from 'react';

import './navbar.css';

interface Props {

}

const Navbar: React.FC<Props> = (props: Props): ReactElement => {

    return (
        <div className="nav-container">
            <img alt='logo' style={{ width: '100%' }} src={'./assets/navbar.png'} />
        </div>
    );
};

export default Navbar;