import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props =>{
    return (
        <div>
            <Link to="/start">
                <div>快速開始</div>
            </Link>
            <Link to="/react">
                <div>React 基礎</div>
            </Link>
            <Link to="/redux">
                <div>Redux 基礎</div>
            </Link>
        </div>
    )
}

export default Nav;