// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let table=document.createElement('table');
    let thead=document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('target').appendChild(table);

    let row=document.createElement('tr');
    let row_1=document.createElement('td');
    let row_2=document.createElement('td');
    let row_3=document.createElement('td');
    let row_4=document.createElement('td');
    let row_5=document.createElement('td');
    let row_6=document.createElement('td');
    let row_7=document.createElement('td');
    let row_8=document.createElement('td');
    let row_9=document.createElement('td');
    let row_10=document.createElement('td');

    row.appendChild(row_1);
    row.appendChild(row_2);
    row.appendChild(row_3);
    row.appendChild(row_4);
    row.appendChild(row_5);
    row.appendChild(row_6);
    row.appendChild(row_7);
    row.appendChild(row_8);
    row.appendChild(row_9);
    row.appendChild(row_10);
    thead.appendChild(row);
    
})();
