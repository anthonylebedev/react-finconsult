import React, {Component} from 'react';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Palette extends Component {
    InstaService = new InstaService();    

    state = {
        data: [],
        error: false
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onDataLoaded)
        .catch(this.onError);        
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    onDataLoaded = (data) => {
        this.setState({
            error: false,
            data
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {id, src, alt} = item;
            return (
                <img key={id} src={src} alt={alt}></img>
            )
        })
    }

    render() {
        const {error, data} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(data);

        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}
