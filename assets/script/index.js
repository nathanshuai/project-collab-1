'use strict';

const year = document.querySelector('.year');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const message = document.querySelector('.message');
const reset = document.querySelector('.reset');

year.innerText = new Date().getFullYear();

function isEmpty(str) {
  let a = str.trim();

  if (str.length > 0) {
    return true
  }
  return false
}

reset.addEventListener('click', function() {
  email.value = '';
});