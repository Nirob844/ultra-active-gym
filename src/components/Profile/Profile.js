import React, { useEffect, useState } from 'react';
import './Profile.css';
import nirob from '../../image/nirob.jpeg'

const Profile = ({ cart }) => {
    const [time, setTime] = useState([]);
    const addBreakTime = (timeAdd) => {
        setTime(timeAdd);
        localStorage.setItem('time', timeAdd);
    };
    useEffect(() => {
        const prevTime = localStorage.getItem('time');
        if (prevTime) {
            setTime(prevTime);
        }
    }, []);
    let total = 0;
    for (const sumCount of cart) {
        total = total + sumCount.time;
    }
    return (
        <div className='profile'>
            <div className='profile-name'>
                <img src={nirob} alt="" />
                <h1>Nirob Hasan</h1>
            </div>
            <div className="profile-info">
                <div>
                    <h3>75 kg</h3>
                    <h4>weight</h4>
                </div>
                <div>
                    <h3>6.6</h3>
                    <h4>height</h4>
                </div>
                <div>
                    <h3>23 yrs</h3>
                    <h4>age</h4>
                </div>
            </div>
            <div className="add-break time">

                <p onClick={() => addBreakTime('10s')}>10s</p>
                <p onClick={() => addBreakTime('20s')}>20s</p>
                <p onClick={() => addBreakTime('30s')}>30s</p>
                <p onClick={() => addBreakTime('40s')}>40s</p>

            </div>
            <div className='exe-det'>
                <h2>Exercise Details</h2>

                <div className="exe-time">
                    <h3>Exercise time:</h3>
                    <h3>{total}s</h3>
                </div>
                <div className="break-time">
                    <h3>Break time:</h3>
                    <h3> {time}</h3>
                </div>
            </div>
            <button className='btn-com'>Activity Completed</button>

        </div>
    );
};

export default Profile;