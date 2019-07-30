/* eslint-disable no-console */
/* eslint-disable no-empty-function */

const log = (args) => Function.prototype.bind.call(...args);

class DevLogger {
    get log() {
        let args = isDev ? [ console.log, console, ...arguments ] : [ () => {} ];
        return log(args);
    }

    get error() {
        let args = isDev ? [ console.error, console, ...arguments ] : [ () => {} ];
        return log(args);
    }

    get logInProd() {
        let args = !isDev ? [ console.log, console, ...arguments ] : [ () => {} ];
        return log(args);
    }
}

module.exports = new DevLogger();
