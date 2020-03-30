import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="../error.png"
                alt="noavatar"
                name="noavatar"/>
            <div className="users__block">
                <User
                    src="../error.png"
                    alt="noavatar"
                    name="noavatar"
                    min/>
                <User
                    src="../error.png"
                    alt="noavatar"
                    name="noavatar"
                    min/>
                </div>
        </div>
    )
}