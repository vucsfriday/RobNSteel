document.getElementById("add__item").addEventListener("click", myFunction);

function myFunction() {
  let grabTable = document.getElementById("main__table");
  let row = grabTable.insertRow(1);
  let newCell1 = row.insertCell(0);
  let newCell2 = row.insertCell(1);
  let newCell3 = row.insertCell(2);
  let newCell4 = row.insertCell(3);
  let newCell5 = row.insertCell(4);
  let newCell6 = row.insertCell(5);
  let newCell7 = row.insertCell(6);
}
