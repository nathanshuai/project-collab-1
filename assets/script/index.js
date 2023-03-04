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


var images = document.querySelectorAll('.img');

for (var i = 0; i < images.length; i++) {
  var image = images[i];
  var isScaled = false;
  
  image.addEventListener('click', function() {
    if (isScaled) {
      this.style.transform = "scale(1)";
      isScaled = false;
    } else {
      this.style.transform = "scale(1.3)";
      isScaled = true;
    }
  });
}





