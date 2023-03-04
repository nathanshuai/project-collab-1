'use strict';

const year = document.querySelector('.year');
const nameUser = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const clear = document.querySelector('.clear');
const send = document.querySelector('.send');



const images = document.querySelectorAll('.img');

console.log(images)

for (var i = 0; i < images.length; i++) {
  var image = images[i];
  var isScaled = false;
  
  image.addEventListener('click', function() {
    if (isScaled) {
      this.style.transform = "scale(1)";
      isScaled = false;
    } else {
      this.style.transform = "scale(1.2)";
      isScaled = true;
    }
  });
}


year.innerText = new Date().getFullYear();

send.addEventListener('click', function() {
  // NOT WORKING
  // nameUser.value.trim();
  // email.value.trim();
  // phone.value.trim();
  
  if (
    nameUser.hasAttribute('required') && nameUser.value === '' ||
    email.hasAttribute('required') && email.value === '' ||
    phone.hasAttribute('required') && phone.value === ''
    ) {
      alert('There are still some fields required');
    }
  }
)

// function isEmpty(str) {
//   let a = str.trim();
// 
//   if (str.length > 0) {
//     return true
//   }
//   return false
// }

