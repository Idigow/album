import React from 'react';
import {NavLink} from "react-router-dom";

function Album(props) {

    return (
        <div>
            <li className="album" >
                <NavLink to={`/${props.album.id}`} activeClassName="selected">
                    {props.album.title}
                </NavLink>
            </li>
        </div>
    );
}

export default Album;