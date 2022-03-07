// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

	// your code here

	let p = document.getElementById('target');
	let txt = p.innerText;

	txt = txt.split('');
	p.innerText = '';

	const randf = () => {
		let font = ['30px', '45px', '25px', '18px', '20px'];
		let rand = Math.floor(Math.random() * font.length);

		return font[rand];
	};

	txt.forEach((l, e) => {
		let span = document.createElement('span');
		span.innerText = l;
		for (let i = 0; i < txt.length; i++) {
			span.style.fontSize = randf();
		}
		p.appendChild(span);
	});
})();
