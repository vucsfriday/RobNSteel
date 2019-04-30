function addRow(tableId) {
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
    image.setAttribute("height", 200);
    image.setAttribute("width", 200);
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
    select.appendChild(opt2);
    
    // Quantity Input
    let quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.placeholder = "Enter quantity"
    formCell.appendChild(quantityInput);

    // Button
    let updateButton = document.createElement("button");
    updateButton.type = "button";
    updateButton.className = "btn btn-sm btn-amber";
    updateButton.id = "btn";
    updateButton.name = "Update";

    

    

    //<input type="number" class="add__value" placeholder=""></input>

    
    
}