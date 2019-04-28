/*
count = 0;
document.getElementById('btn').addEventListener('click', function() { 
    
    count += 1;
    var totalQty = document.querySelector('.quantity__1');
    totalQty.textContent = count; 
});

document.getElementById('btn1').addEventListener('click', function() { 
    
    count += 1;
      var totalQty = document.querySelector('.quantity__2');
      totalQty.textContent = count; 
  });

  document.getElementById('btn2').addEventListener('click', function() { 
    
    count += 1;
      var totalQty = document.querySelector('.quantity__3');
      totalQty.textContent = count; 
  });
  document.getElementById('btn3').addEventListener('click', function() { 
    
     count += 1;
      var totalQty = document.querySelector('.quantity__4');
      totalQty.textContent = count; 
  });
  */

var DOMstrings = {
    inputType: '.add__type',
    inputValue: '.add__value'
};

document.getElementById('btn').addEventListener('click', function() { 
    // var typeInput = document.querySelector(DOMstrings.inputType).value; // either subtract or add to inventory
    var value = parseFloat(document.querySelector(DOMstrings.inputValue).value);
    
    var totalQty = document.querySelector('.quantity__1');
    totalQty.textContent = value;

});

