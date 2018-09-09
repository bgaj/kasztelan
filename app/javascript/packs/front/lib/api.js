import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: '/api/v1/',
            headers: {'X-CSRF-Token': document.querySelector("meta[name='csrf-token']").getAttribute("content")}
        });
    }

    loadHome() {
        return this.api.get("posts/home");
    }

    loadPosts(params) {
        return this.api.get("posts", {params: params});
    }

    loadPost(id, params) {
        return this.api.get(`posts/${id}`, {params: params});
    }

    loadSeason() {
        return this.api.get(`current_season`);
    }

    loadSchedule() {
        return this.api.get('schedule');
    }
    loadNextMatch() {
        return this.api.get('next_match');
    }
    loadPrevMatch() {
        return this.api.get('prev_match');
    }
    contactForm(params) {
        return this.api.post('contact_form', params)
    }
}

export default Api
