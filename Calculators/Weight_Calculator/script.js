let kgRef = document.getElementById('kg');
let lbRef = document.getElementById('lb');
let ozRef = document.getElementById('oz');
let gmRef = document.getElementById('gm');

let convertFromKg = () => {
	let kg = kgRef.value;
	//toFixed(2) limits the decimals to 2 digits.
	lbRef.value = (kg * 2.205).toFixed(2);
	ozRef.value = (kg * 35.274).toFixed(2);
	gmRef.value = (kg * 1000).toFixed(2);
};

let convertFromLb = () => {
	let lb = lbRef.value;
	kgRef.value = (lb / 2.205).toFixed(2);
	ozRef.value = (lb * 16).toFixed(2);
	gmRef.value = (lb * 453.592).toFixed(2);
};

let convertFromOz = () => {
	let oz = ozRef.value;
	kgRef.value = (oz / 35.274).toFixed(2);
	lbRef.value = (oz / 16).toFixed(2);
	gmRef.value = (oz * 28.35).toFixed(2);
};

//convertFromGm
let convertFromGm = () => {
	let gm = gmRef.value;
	kgRef.value = (gm / 1000).toFixed(2);
	lbRef.value = (gm / 453.592).toFixed(2);
	ozRef.value = (gm / 28.35).toFixed(2);
};

kgRef.addEventListener('input', convertFromKg);
lbRef.addEventListener('input', convertFromLb);
ozRef.addEventListener('input', convertFromOz);
gmRef.addEventListener('input', convertFromGm);
window.addEventListener('load', convertFromKg);
