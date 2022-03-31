import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWeb();

import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();

window.DARKNESS = {};

import * as nav_Button from "./modules/nav.js";
nav_Button.navButton();

import * as navigation_Page from "./modules/nav_page.js";
navigation_Page.navigationPage();

import * as formFunction from "./modules/form.js";
formFunction.formEvents();
formFunction.formOpen();
formFunction.formValidRegExp();
formFunction.formSubmit();