import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import Profile from '../Profile/Profile';
import './Exercise.css';

const Exercise = () => {
    const [elements, setElements] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('gym.JSON')
            .then(res => res.json())
            //  .then(data => console.log(data))
            .then(data => setElements(data))
    }, []);
    const handleAddToCart = (element) => {
        console.log(element);
        // do not do this: cart.push(product);
        const newCart = [...cart, element];
        setCart(newCart);
    }

    return (
        <div className='exercise-container'>
            <div>
                <h2>Select today exercise</h2>
                <div className="element-container">
                    {
                        elements.map(element => <Element
                            key={element.id}
                            element={element}
                            handleAddToCart={handleAddToCart}
                        ></Element>)
                    }
                </div>
            </div>
            <div className="profile-container">
                <p>Selected Items: {cart.length}</p>
                <Profile></Profile>
            </div>



        </div>
    );
};

export default Exercise;