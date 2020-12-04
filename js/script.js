var i = 0;
var txt =
	'Front-end focused full-stack software engineer and proficient in Javascript and React.';
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
