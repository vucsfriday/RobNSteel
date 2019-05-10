
document.getElementById('btn').addEventListener('click', function() { 
    // var typeInput = document.querySelector(DOMstrings.inputType).value; // either subtract or add to inventory
    var value = parseFloat(document.querySelector(DOMstrings.inputValue).value);
    
    var totalQty = document.querySelector('.quantity__1');
    totalQty.textContent = value;

});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function submitForm() {
    let table = document.getElementById("main_table");
    let row = table.insertRow(1);
    let cellSku = row.insertcell(1).getElementByName("sku");
    let celldescription = row.insertcell(1).getElementByName("description");
    let cellquantity = row.insertcell(1).getElementByName("quantity");
    let cellcost = row.insertcell(1).getElementByName("cost");
    let cellprice = row.insertcell(1).getElementByName("price");
    let cellimage = row.insertcell(1).getElementByName("image");
   }

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


