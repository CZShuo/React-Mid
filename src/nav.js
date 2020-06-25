import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Nav = props =>{
    let {data}= props;
    return (
        <div>
            {data.map((item, index) =>{
                return (
                    <Link key={index} to={`/${item.key}`}>
                        <div>{item.title}</div>
                    </Link>
                )
            })}
        </div>
    )
}

Nav.proptypes={
    data: PropTypes.array.isRequired
}

export default Nav;