'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return; // no table found, nothing to do
  }

  ['thead', 'tbody', 'tfoot'].forEach(sectionName => {
    const section = table.querySelector(sectionName);

    if (section) {
      for (const row of section.rows) {
        const secondCell = row.cells[1];
        if (!secondCell) {
          continue; // skip if row has < 2 cells
        }

        const clonedCell = secondCell.cloneNode(true);
        const lastCell = row.cells[row.cells.length - 1];

        row.insertBefore(clonedCell, lastCell);
      }
    }
  });
});
