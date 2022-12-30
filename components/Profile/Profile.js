import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-name'>
                <img src="../../image/WhatsApp Image 2022-12-08 at 2.10.28 PM.jpeg" alt="" />
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
            <div className="add-break">
                <p>10s</p>
                <p>20s</p>
                <p>30s</p>
                <p>40s</p>
            </div>
            <div className='int-fld'>
                <h2>Exercise Details</h2>
                <input type="text" placeholder='Exercise time' />
                <input type="text" placeholder='Break time' />
            </div>
            <button className='btn-com'>Activity Completed</button>
        </div>
    );
};

export default Profile;