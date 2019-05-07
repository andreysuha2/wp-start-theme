import axios from 'axios'

class Http {
    constructor() {
        Object.defineProperty(this, 'baseUrl', { value: `${window.location.origin}/wp-admin/admin-ajax.php` });
    }

    get http() {
        axios.create({
            baseURL: this.baseUrl,
            headers: { 'Content-Type':  'application/json'}
        });
    }

    get(action, params = {}, options = {}) {
        params.action = action;
        return new Promise((resolve, reject) => {
           this.http.get('/', {params: params}, options)
                    .then((response) => resolve(response))
                    .catch((err) => reject(err.response));
        });
    }

    post(action, data = {}, options = {}) {
        data.action = action;
        return new Promise(((resolve, reject) => {
            this.http.post('/', data, options)
                     .then((response) => resolve(response))
                     .catch((err) => reject(err.response));
        }));
    }
}

export default new Http();
