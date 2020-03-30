import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="../error.png"
                alt="noavatar"
                name="noavatar"/>
            <Palette/>
        </div>
    )
}

export default Profile;
