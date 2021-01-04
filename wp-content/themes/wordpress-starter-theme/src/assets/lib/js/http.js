import axios from 'axios';

class Http {
    constructor() {
        Object.defineProperty(this, 'baseUrl', { value: `${window.location.origin}/wp-admin/admin-ajax.php` });
    }

    get http() {
        return axios.create({
            baseURL: this.baseUrl,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    get(action, params = {}, options = {}) {
        params.action = action;
        return new Promise((resolve, reject) => {
            this.http.get('', { params }, options)
                .then((response) => resolve(response))
                .catch((err) => reject(err.response));
        });
    }

    post(action, data = {}, options = {}) {
        let formData = new FormData();
        formData.append("action", action);
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        return new Promise((resolve, reject) => {
            this.http.post('', formData, options)
                .then((response) => resolve(response))
                .catch((err) => reject(err.response));
        });
    }
}

export default new Http();
