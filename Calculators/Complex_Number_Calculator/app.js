function Addition() {
	let a = Number(document.getElementById('a').value);
	let b = Number(document.getElementById('b').value);
	let c = Number(document.getElementById('c').value);
	let d = Number(document.getElementById('d').value);

	let x = a + c;
	let y = b + d;
	document.getElementById('result').innerHTML = x + ' + ' + y + 'i';
}

function Subtraction() {
	let a = Number(document.getElementById('a').value);
	let b = Number(document.getElementById('b').value);
	let c = Number(document.getElementById('c').value);
	let d = Number(document.getElementById('d').value);

	let x = a - c;
	let y = b - d;
	document.getElementById('result').innerHTML = x + ' + ' + y + 'i';
}

function Multiplication() {
	let a = Number(document.getElementById('a').value);
	let b = Number(document.getElementById('b').value);
	let c = Number(document.getElementById('c').value);
	let d = Number(document.getElementById('d').value);

	let x = (a*c) - (b*d);
	let y = (a*d) + (b*c);
	document.getElementById('result').innerHTML = x + ' + ' + y + 'i';
}

function Division() {
	let a = Number(document.getElementById('a').value);
	let b = Number(document.getElementById('b').value);
	let c = Number(document.getElementById('c').value);
	let d = Number(document.getElementById('d').value);

	let x = ((a*c) + (b*d)) / (c*c + d*d);
	let y = ((b*c) - (a*d)) / (c*c + d*d);
	document.getElementById('result').innerHTML = x + ' + ' + y + 'i';
}

function ResetAll() {
	document.getElementById('a').value = '';
	document.getElementById('b').value = '';
	document.getElementById('c').value = '';
	document.getElementById('d').value = '';
	document.getElementById('result').innerHTML = '-';
}