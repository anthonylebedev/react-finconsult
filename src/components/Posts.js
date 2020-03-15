import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="http://lorempixel.com/400/200" />
            </div>
        )
    }
}