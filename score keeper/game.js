var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var input = document.querySelector('input');
var reset = document.querySelector('#reset');
var p1display = document.querySelector('#p1display');
var p2display = document.querySelector('#p2display');
var winningScoreDisplay = document.querySelector('p span');
var winningScore = 5;
var p1score = 0;
var p2score = 0;
var gameOver = false;
p1.addEventListener('click', function () {
	if (!gameOver) {
		p1score++;
		if (p1score === winningScore) {
			gameOver = true;
			p1display.classList.add('green');
		}
		p1display.textContent = p1score;
	}
});

p2.addEventListener('click', function () {
	if (!gameOver) {
		p2score++;
		if (p2score === winningScore) {
			gameOver = true;
			p2display.classList.add('green');
		}
		p2display.textContent = p2score;
	}
});

function resetGame() {
	p1score = 0;
	p1display.textContent = p1score;
	p1display.classList.remove('green');
	p2score = 0;
	p2display.textContent = p2score;
	p2display.classList.remove('green');
	gameOver = false;
}

reset.addEventListener('click', resetGame);

input.addEventListener('change', function () {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	resetGame();
});