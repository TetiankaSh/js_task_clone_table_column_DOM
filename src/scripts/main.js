'use strict';

const table = document.querySelector('table');

['thead', 'tbody', 'tfoot'].forEach(sectionName => {
  const section = table.querySelector(sectionName);

  if (section) {
    for (const row of section.rows) {
      const secondCell = row.cells[1]; // index 1 → second column
      const clonedCell = secondCell.cloneNode(true);

      // insert before last cell in the row
      row.insertBefore(clonedCell, row.lastElementChild);
    }
  }
});
