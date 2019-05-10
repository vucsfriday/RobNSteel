
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
    let cellsku = row.insertCell(0); 
    console.log(row);
    cellsku.innerHTML = document.getElementById("sku").value;
    let description = document.getElementById("description").value;
    let quantity = document.getElementById("quantity").value;
    let cost = document.getElementById("cost").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("file").value;
    }

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


