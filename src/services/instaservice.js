export default class Instaservice {
    constructor() {
        this._apiBase = 'http://localhost:3333/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't not fetch ${url}, received ${res.status}`);
        }

        return res.json();
    }

    getAllPosts = async () => { 
        const res = await this.getResource('posts');

        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('posts');
        
        return res.map(this._transformPost);
    }

    _transformPost = (post) => {
        return {
            id: post.id,
            src: post.src,
            alt: post.alt
        }
    }
}