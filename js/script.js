var i = 0;
var txt =
  'Computer Science graduate and full stack software engineer proficient in React, JavaScript, Express and Python.';
var speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById('type').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  var d = new Date();
  var year = d.getFullYear();
  let text = `© ${year}  Kevin Qi | All rights reserved.`;
  document.getElementById('footerText').innerHTML = text;
};
