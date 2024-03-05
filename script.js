fetch('seis-tour-stats.csv')
  .then(response => response.text())
  .then(text => {
    const rows = text.split('\n');
    const headers = rows[0].split(',');
    const table = document.getElementById('csv-data');
    // Add table headers
    const headerRow = table.insertRow();
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    // Add table data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');
      if (rowData.length === headers.length) {
        const row = table.insertRow();
        rowData.forEach(cellData => {
          const td = document.createElement('td');
          td.textContent = cellData;
          row.appendChild(td);
        });
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
