import React from 'react';

const Element = ({ element }) => {
    const { name, id, age, description } = element;
    return (
        <div>
            <h2>name={name}</h2>
        </div>
    );
};

export default Element;