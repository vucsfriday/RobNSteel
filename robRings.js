function addNewItem() {
  document.querySelector('.bg-modal').style.display = 'flex';
}

function addInfo() {
  let cellSku, cellDescription, cellQty, cellCost, cellPrice, cellImage;

  // closes modal when submit button is clicked
 $(".bg-modal").toggle(false);
  //document.querySelector('.bg-modal').style.display = 'none';

 // validation
 if ($("#new_sku").val() <=0) {
   alert('Please enter a value in all fields.');
 } else if ($("#new_descrip").val() <= 0) {
    alert('Please enter a value in all fields.');
} else if ($("#new_qty").val() <= 0) {
   alert('Please enter a value in all fields.'); 
} else if ($("#new_cost").val() <= 0) {
  alert('Please enter a value in all fields.');
} else if ($("#new_price").val() <= 0) {
  alert('Please enter a value in all fields.')
} else {

    // selects table
    let table = $("#main_table tbody");
    
      // creates new row
      let row = $("<tr>").prependTo(table);
  
      // creates cells in new row
      cellSku = $("<td>").prependTo(row);
      cellDescription = row.prependTo(row);
      cellQty = row.prependTo(row);
      cellCost = row.prependTo(row);
      cellPrice = row.prependTo(row);
      cellImage = row.prependTo(row);

      // updates user interface
      cellSku.innerHTML = $("#new_sku").val();
      cellDescription.innerHTML = $("#new_descrip").val();
      cellQty.innerHTML = parseInt($("#new_qty").val());
      cellCost.innerHTML = "$" + $("#new_cost").val();
      cellPrice.innerHTML = "$" + $("#new_price").val();
    
     
      let picture = $("#file").prop('files')[0].name;
      cellImage.innerHTML = '<img src="' + picture + '" width="200" height="200" alt="skull ring"><button type="button" class="edit_btn">Edit</button>'
 }
   

  // clear fields once you hit submit
  $('#new_sku').val();
  $('#new_descrip').val();
  $('#new_qty').val();
  $('#new_cost').val();
  $('#new_price').val();
  $('#file').val();

}

document.getElementById('btn-add-new').addEventListener('click', addInfo);

// close modal
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

//TODO: add edit button to each row, modal, edit UI

document.querySelector('.edit_btn').addEventListener('click', addNewItem);