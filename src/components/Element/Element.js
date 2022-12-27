import React from 'react';
import './Element.css'
const Element = ({ element }) => {
    const { name, img, age, description } = element;
    return (
        <div className='element'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Age : {age}</p>
            <button className='btn-cart'>add to list</button>

        </div>
    );
};

export default Element;