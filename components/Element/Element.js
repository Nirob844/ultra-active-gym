import React from 'react';
import './Element.css'
const Element = ({ element, handleAddToCart }) => {
    const { name, img, age, description, time } = element;
    return (
        <div className='element'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Time required : {time}</p>
            <p> {age}</p>
            <button onClick={() => handleAddToCart(element)} className='btn-cart'>add to list</button>

        </div>
    );
};

export default Element;