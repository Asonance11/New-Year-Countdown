const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let currentYear = new Date().getFullYear();

let nextYearTime = new Date(`January 1, ${currentYear + 1} 00:00:00`);

setInterval(updateTime, 1000);

function updateTime() {
	let CurrentDate = new Date();
	let diff = nextYearTime - CurrentDate;
	let d = Math.floor(diff / 1000 / 60 / 60 / 24);
	let h = Math.floor((diff / 1000 / 60 / 60) % 24);
	let m = Math.floor((diff / 1000 / 60) % 60);
	let s = Math.floor((diff / 1000) % 60);
	s = s < 10 ? '0' + s : s;
	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	d = d < 10 ? '0' + d : d;

	days.textContent = `${d}`;
	hours.textContent = `${h}`;
	minutes.textContent = `${m}`;
	seconds.textContent = `${s}`;
}
