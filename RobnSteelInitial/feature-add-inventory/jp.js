function addRow(tableId) {
    let sku = document.getElementById("sku").value;
    let itemName = document.getElementById("itemName").value;
    let quantity = document.getElementById("quantity").value;
    let cost = document.getElementById("cost").value;
    let price = document.getElementById("price").value;
    let imagePath=document.getElementById("image-path").value;

    let tableRef = document.getElementById(tableId);
    let newRow = tableRef.insertRow(-1);
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

    let imageCell = newRow.insertCell(5);
    let image = document.createElement("img");
    image.setAttribute("src", imagePath);
    image.setAttribute("height", 200);
    image.setAttribute("width", 200);
    imageCell.appendChild(image);

    
    
}