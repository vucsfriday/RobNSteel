
document.getElementById('btn').addEventListener('click', function() { 
    // var typeInput = document.querySelector(DOMstrings.inputType).value; // either subtract or add to inventory
    var value = parseFloat(document.querySelector(DOMstrings.inputValue).value);
    
    var totalQty = document.querySelector('.quantity__1');
    totalQty.textContent = value;

});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function submitForm(sku, description, quantity, cost, price, image, quantity)
//add 7 cells in new row
{   //where are we putting it
    let table = document.getElementById("main_table");
    //making new row
    let row = table.insertRow(1);
    //add info from Sku text box
    let cellsku = row.insertCell(0); 
        cellsku.innerHTML = document.getElementById("sku").value;
    //add info from description 
    let celldescription = row.insertCell(1); 
    celldescription.innerHTML = document.getElementById("description").value;
    let cellquantity = row.insertCell(2); 
        cellquantity.innerHTML = document.getElementById("quantity").value;
    let cellcost = row.insertCell(3); 
        cellcost.innerHTML = document.getElementById("cost").value;
    let cellprice = row.insertCell(4); 
        cellprice.innerHTML = document.getElementById("price").value;
    let cellimage = row.insertCell(5); 
    cellimage.innerHTML = document.getElementById("file").value;
    //add info in quantity field *next step can edit and add too others
    let cellamount = row.insertCell(6);
    cellamount.innerHTML = document.getElementById("quantity").value;
 }

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


