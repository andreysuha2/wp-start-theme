import "./main.scss";

let wrapperId = null;

function createWrapper() {
    if(wrapperId) return;
    wrapperId = new Date().getTime();
}

createWrapper();
