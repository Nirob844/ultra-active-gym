import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import './Exercise.css';

const Exercise = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        fetch('gym.JSON')
            .then(res => res.json())
            .then(data => setElements(data))
    }, []);

    return (
        <div className='exercise-container'>
            <h2>Select today exercise</h2>
            <div className="element-container">
                {
                    elements.map(element => <Element
                        key={element.id}
                        element={element}></Element>)
                }
            </div>


        </div>
    );
};

export default Exercise;