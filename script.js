fetch('seis-tour-stats.csv')
  .then(response => response.text())
  .then(text => {
    const rows = text.split('\n');
    const table = document.getElementById('csv-data');
    rows.forEach(row => {
      const rowData = row.split(',');
      const tr = document.createElement('tr');
      rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.textContent = cellData;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
