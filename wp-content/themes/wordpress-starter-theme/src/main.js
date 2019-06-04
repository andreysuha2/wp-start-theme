// import styles
import '@scss/main.scss';
import '@lib/scss/base.lib.scss';
// import libs
import dl from '@lib/js/devLogger';
import http from '@lib/js/http';
import DomManipulate from '@lib/js/domManipulate';
// set libs to global scope
window.dl = dl;
window.http = http;
window.dml = DomManipulate;
// require main js file
require("./framework/app");
require('@js/index');
