
require('../css/app.scss');
import {login} from './login';
login('admin','admin');
document.write("Welcome to WebPack!!");
console.log("App Loaded");

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');
document.getElementById('img_container').appendChild(img);