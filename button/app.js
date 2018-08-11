var btn = document.querySelector('button');
var body = document.body;
btn.addEventListener('click', addClass);
function addClass() {
	body.classList.toggle('color');
}