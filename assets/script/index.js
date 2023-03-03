'use strict';

const year = document.querySelector('.year');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const message = document.querySelector('.message');

year.innerText = new Date().getFullYear();