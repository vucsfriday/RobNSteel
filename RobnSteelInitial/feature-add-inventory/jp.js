function addRow(tableId) {
    let tableRef = document.getElementById(tableId)
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode('New Row');
    newCell.appendChild(newText);

    cell.innerHtml = itemName;

}