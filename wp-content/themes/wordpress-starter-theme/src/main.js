// import styles
import '@scss/main.scss';
import '@lib/scss/base.lib.scss';
// import libs
import dl from '@lib/js/devLogger';
import http from '@lib/js/http'
//set libs to global scope
window.dl = dl;
window.http = http;
//require main js file
require("@js/index");
