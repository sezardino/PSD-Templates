let htmlValue = document.querySelector('#htmlvalue'),
	cssValue = document.querySelector('#cssvalue'),
	jsValue = document.querySelector('#jsvalue');

let HTML = new ProgressBar.Circle('#HTML', {
	easing: 'easeInOut',
	color: '#ECEBEB',
	strokeWidth: 4,
	text: {
		className: 'progress_perc',
	},
	step: function (state, circle) {
		var value = Math.round(circle.value() * 100);
		if (value === 0) {
			circle.setText('');
		} else {
			circle.setText(value + ' %');
		}
	},
});
let CSS = new ProgressBar.Circle('#CSS', {
	easing: 'easeInOut',
	color: '#ECEBEB',
	strokeWidth: 4,
	text: {
		className: 'progress_perc',
	},
	step: function (state, circle) {
		var value = Math.round(circle.value() * 100);
		if (value === 0) {
			circle.setText('');
		} else {
			circle.setText(value + ' %');
		}
	},
});
let JS = new ProgressBar.Circle('#JS', {
	easing: 'easeInOut',
	color: '#ECEBEB',
	strokeWidth: 4,
	text: {
		className: 'progress_perc',
	},
	step: function (state, circle) {
		var value = Math.round(circle.value() * 100);
		if (value === 0) {
			circle.setText('');
		} else {
			circle.setText(value + ' %');
		}
	},
});
window.addEventListener('scroll', function () {
	if (window.scrollY > 1100) {
		HTML.animate(htmlValue.value / 100),
			CSS.animate(cssValue.value / 100),
			JS.animate(jsValue.value / 100);
	}
});

let overflow = document.querySelector('.overflow'),
	close = document.querySelector('.close'),
	galery = document.querySelectorAll('.galery_img'),
	overflowImg = document.querySelector('.overflow-content');

galery.forEach((item) => {
	item.addEventListener('click', () => {
		overflow.style.display = 'block';
		overflowImg.src = item.src;
		document.body.style.overflow = 'hidden';
	});
});

close.addEventListener('click', function () {
	overflow.style.display = 'none';
	document.body.style.overflow = '';
});
let scroll = document.querySelector('.scrollup');

scroll.addEventListener('click', () => {
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});
window.addEventListener('scroll', () => {
	if (scrollY < 1000) {
		scroll.style.display = 'none';
	} else {
		scroll.style.display = 'block';
	}
});
