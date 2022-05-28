let colors = ['red', 'cyan', 'green', 'whiteblue', 'lightblue', 'pink'];
let button = document.getElementById('button');
button.addEventListener('click', colorChanger);
function colorChanger() {
    let index = parseInt((Math.random() * colors.length) + 1);
	console.log((Math.random()*colors.length)+1);
    let canvas = document.getElementById('canvas');
    canvas.style.background = `${colors[index]}`;
}