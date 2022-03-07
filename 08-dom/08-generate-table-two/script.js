// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {
	const table = document.createElement('table');

	for (let i = 1; i <= 10; i++) {
		const tr = document.createElement('tr');
		for (let b = 1; b <= 10; b++) {
			let td = document.createElement('td');
			let nbr = i * b;
			td.innerHTML = nbr;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

	document.getElementById('target').appendChild(table);
})();