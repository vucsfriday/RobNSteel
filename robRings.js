function addNewItem() {
  let table = document.getElementById("main_table");
  // creates new row
  let row = table.insertRow(1);
  
  // creates cells in new row
  let cellSku = row.insertCell(0);
  let cellDescription = row.insertCell(1);
  let cellQty = row.insertCell(2)
  let cellCost = row.insertCell(3)
  let cellPrice = row.insertCell(4)
  let cellImage = row.insertCell(5)
  
  document.querySelector('.bg-modal').style.display = 'flex';

  document.getElementById('btn-add-new').addEventListener('click', function(){
    //  closes modal when submit button is clicked
    document.querySelector('.bg-modal').style.display = 'none';
  
    // updates user interface
    cellSku.innerHTML = document.getElementById("new_sku").value;
    cellDescription.innerHTML = document.getElementById("new_descrip").value;
    cellQty.innerHTML = document.getElementById("new_qty").value;
    cellCost.innerHTML = document.getElementById("new_cost").value;
    cellPrice.innerHTML = document.getElementById("new_price").value;
    
    // upload img
    picture = document.getElementById("file").files[0].name;
    cellImage.innerHTML = '<img src="' + picture + '" width="200" height="200" alt="skull ring">'
    
  
  });

}
 
// close modal
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});






