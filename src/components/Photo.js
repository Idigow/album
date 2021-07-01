import React from 'react';

function Photo(props) {
    return (
        <div className='photo'>
            <img className='image' src={props.photo.url} alt=""/>
        </div>
    );
}

export default Photo;