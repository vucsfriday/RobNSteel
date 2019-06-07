function addNewItem() {
  $('.bg-modal').attr("style","display:flex");
}

function addInfo() {
  let cellSku, cellDescription, cellQty, cellCost, cellPrice, cellImage;

  // closes modal when submit button is clicked
  $(".bg-modal").toggle(false);
  //document.querySelector('.bg-modal').style.display = 'none';

  // validation
  if ($("#new_sku").val() <= 0) {
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
    cellSku = $("<td>").appendTo(row);
    cellDescription = $("<td>").appendTo(row);
    cellQty = $("<td>").appendTo(row);
    cellCost = $("<td>").appendTo(row);
    cellPrice = $("<td>").appendTo(row);
    cellImage = $("<td>").appendTo(row);

    // updates user interface
    cellSku.html($("#new_sku").val());
    cellDescription.html($("#new_descrip").val());
    cellQty.html(parseInt($("#new_qty").val()));
    cellCost.html("$" + $("#new_cost").val());
    cellPrice.html("$" + $("#new_price").val());


    let picture = $("#file").prop('files')[0].name;
    cellImage.html('<img src="' + picture + '" width="200" height="200" alt="skull ring"><button type="button" class="edit_btn">Edit</button>');
  }


  // clear fields once you hit submit
  $('#new_sku').val();
  $('#new_descrip').val();
  $('#new_qty').val();
  $('#new_cost').val();
  $('#new_price').val();
  $('#file').val();
}

  //**Current working on 6/2/19 - button is not submitting info */
  $('btn-add-new').submit(addInfo);

  // close modal - 6/2/19 doesn't work correctly, no  close function
  $('.close').on('click', function () {
    $('.bg-modal').attr("style","display:none");
  });

  //TODO: add edit button to each row, modal, edit UI
  $('.edit_btn').on('click', addNewItem);
