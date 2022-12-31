import React from 'react';
import './Qus.css';

const Qus = () => {
    return (
        <div className="qus-container">
            <h2>Ans</h2>
            <hr />
            <h3>1. How does react work?</h3>
            <br />
            <h4>
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
            </h4>
            <br />
            <br />
            <h3>2. What are the different of props and state?</h3>
            <br />
            <h4>
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
            </h4>
            <br />
            <br />
            <h3>3. What does useEffect Do??</h3>
            <br />
            <h4>
                The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
            </h4>
        </div>
    );
};

export default Qus;