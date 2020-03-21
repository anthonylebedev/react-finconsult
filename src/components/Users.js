import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="http://lorempixel.com/400/200"
                alt="noavatar"
                name="noavatar"/>
            <div className="users__block">
                <User
                    src="http://lorempixel.com/400/200"
                    alt="noavatar"
                    name="noavatar"
                    min/>
                <User
                    src="http://lorempixel.com/400/200"
                    alt="noavatar"
                    name="noavatar"
                    min/>
                </div>
        </div>
    )
}