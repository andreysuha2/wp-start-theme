class Cookie {
    constructor() {
        Object.defineProperty(this, "__cookie", { get() { return document.cookie; } });
    }

    get all() {
        let cookies = {};
        this.__cookie.split("; ").forEach((cookie) => {
            cookie = cookie.split("=");
            cookies[cookie[0]] = cookie[1];
        });
        return cookies;
    }

    getCookie(name) {
        return this.all[name] ? decodeURIComponent(this.all[name]) : null;
    }

    setCookie(name, value, options = {}) {
        let expires = options.expires;

        if(typeof expires === "number" && expires) {
            let d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if(expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        let updatedCookie = `${name}=${value}`;

        for(let propName in options) {
            updatedCookie += `; ${propName}`;
            let propValue = options[propName];
            if(propValue !== true) {
                updatedCookie += `=${propValue}`;
            }
        }

        document.cookie = updatedCookie;
    }

    removeCookie(name) {
        this.setCookie(name, "", { expires: -1 });
    }
}

export default new Cookie();
