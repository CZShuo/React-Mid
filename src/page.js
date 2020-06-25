import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Page = props => {
    let {data} = props;
    return (
        <div>
            <ul>
                {data.sections.map((section, index) =>
                    <li key={index}>{section}</li>
                )}
            </ul>
            <Link to="/">
                <div>回首頁</div>
            </Link>
        </div>
    )
}

Page.proptypes={
    data:PropTypes.object.isRequired
}

export default Page;