import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="http://lorempixel.com/400/200"
                    alt="noavatar"
                    name="noavatar"/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    <b>{this.props.title}</b>
                </div>
                <div className="post__descr">
                    {this.props.description}
                </div>                
            </div>
        )
    }
}