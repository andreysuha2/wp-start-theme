// import styles
import '@scss/main.scss';
import '@lib/scss/base.lib.scss';
// import libs
import dl from '@lib/js/devLogger.js';
//set libs to global scope
window.dl = dl;
//require main js file
require("@js/index");
