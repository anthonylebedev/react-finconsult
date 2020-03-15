import React, {Component} from 'react';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <img src='{this.props.src}' alt='{this.props.alt}'></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    post__description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </div>                
            </div>
        )
        // return (
        //     <div className="post">
        //         <img src="https://i.pinimg.com/236x/7a/83/f2/7a83f2238563b2770dec3dea7a6e91f3.jpg" alt="this.props.alt"></img>
        //         <div className="post__name">
        //             some account
        //         </div>
        //         <div className="post__descr">
        //             post__description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        //         </div>                
        //     </div>
        // )
    }
}