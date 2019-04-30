function addRow(tableId) {
    // Create Table
    var table = document.getElementById('table');

    if (document.getElementById('table').rows.length === 0) {
        var tableHeader = table.createTHead();
        var row = tableHeader.insertRow(0);
        var skuHeader = row.insertCell(0);
        skuHeader.innerHTML = "<b>SKU #</b>";
        var itemNameHeader = row.insertCell(1);
        itemNameHeader.innerHTML = "<b>Description</b>";
        var quantityHeader = row.insertCell(2);
        quantityHeader.innerHTML = "<b>Qty</b>";
        var costHeader = row.insertCell(3);
        costHeader.innerHTML = "<b>Cost</b>";
        var priceHeader = row.insertCell(4);
        priceHeader.innerHTML = "<b>Price</b>";
        var imagePathHeader = row.insertCell(5);
        imagePathHeader.innerHTML = "<b>Image</b>";
        var updateInventoryHeader = row.insertCell(6);
        updateInventoryHeader.innerHTML = "<b>+/- Inventory</b>";
    }

    // Get Values
    let sku = document.getElementById("sku").value;
    let itemName = document.getElementById("itemName").value;
    let quantity = document.getElementById("quantity").value;
    let cost = document.getElementById("cost").value;
    let price = document.getElementById("price").value;
    let imagePath = document.getElementById("image-path").value;

    // Build Row
    let tableRef = document.getElementById(tableId);
    let newRow = tableRef.insertRow(-1);

    // Insert Values
    let skuCell = newRow.insertCell(0);
    let skuText = document.createTextNode(sku);
    skuCell.appendChild(skuText);
    let itemNameCell = newRow.insertCell(1);
    let itemNameText = document.createTextNode(itemName);
    itemNameCell.appendChild(itemNameText);
    let quantityCell = newRow.insertCell(2);
    let quantityText = document.createTextNode(quantity);
    quantityCell.appendChild(quantityText);
    let costCell = newRow.insertCell(3);
    let costText = document.createTextNode(cost);
    costCell.appendChild(costText);
    let priceCell = newRow.insertCell(4);
    let priceText = document.createTextNode(price);
    priceCell.appendChild(priceText);

    // Product Image
    let imageCell = newRow.insertCell(5);
    let image = document.createElement("img");
    image.setAttribute("src", imagePath);
    image.setAttribute("height", 77);
    image.setAttribute("width", 77);
    imageCell.appendChild(image);

    // Add/Remove Form
    let formCell = newRow.insertCell(6);

    // Select
    let selectUpdateType = document.createElement("select");
    selectUpdateType.setAttribute("class", "add__type browser-default custom-select");
    formCell.appendChild(selectUpdateType);
    // Select Options
    let getSelectUpdateType = document.getElementById("select");
    let opt1 = document.createElement("option");
    opt1.appendChild( document.createTextNode('Subtract'));
    selectUpdateType.appendChild(opt1);
    let opt2 = document.createElement("option");
    opt2.appendChild( document.createTextNode('Add'));
    selectUpdateType.appendChild(opt2);
    
    // Quantity Input
    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.placeholder = "Enter quantity";
    formCell.appendChild(quantityInput);

    // Update Button
    let updateButton = document.createElement("button");
    updateButton.type = "button";
    updateButton.className = "btn btn-sm btn-amber";
    updateButton.id = "btn";
    updateButton.innerHTML = 'Update';
    formCell.appendChild(updateButton);

    

    

    


    
    
}