import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: '/api/v1/'
        });
    }

    loadHome() {
        return this.api.get("posts/home");
    }

    loadPosts(params) {
        return this.api.get("posts", {params: params});
    }

    loadPost(id) {
        return this.api.get(`posts/${id}`);
    }

    loadSeason() {
        return this.api.get(`current_season`);
    }

    loadSchedule() {
        return this.api.get('schedule');
    }
}

export default Api
