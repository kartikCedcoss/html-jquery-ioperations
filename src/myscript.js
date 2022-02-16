
productArr=[];

$(document).ready(function(){
$("#btnAddnew").hide();
  $('#btnDisplay').on('click',function(){
    display();      
  });
 
    $("#btnAdd").on('click',function(){
    var id = document.getElementById("product_id").value;
    var name = document.getElementById("product_name").value;
    var price = document.getElementById("product_price").value;
    var quantity = document.getElementById("product_quantity").value;
    var objproduct = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
      };
      productArr.push(objproduct);
        add(productArr);

    });
    $("#btnAddnew").on('click',function () {
      $("#btnAddnew").hide();
      $("#btnUpdate").show();
      var v_id = document.getElementById("product_id").value;
      var v_name = document.getElementById("product_name").value;
      var v_price = document.getElementById("product_price").value;
      var v_quantity = document.getElementById("product_quantity").value;
    
      for (let i = 0; i < productArr.length; i++) {
        if (productArr[i].id == v_id) {
          productArr[i].id = v_id;
          productArr[i].name = v_name;
          productArr[i].price = v_price;
          productArr[i].quantity = v_quantity;
        }
      }
    });
    $("#btnDelete").on('click',function(){
    var d_id = document.getElementById("product_id").value;
    var a = parseInt(d_id);
    
    del(a);
       
    });
    
    $("#btnUpdate").on('click',function(){
      $("#btnUpdate").hide();
      $("#btnAddnew").show();
     
      var v_id = document.getElementById("product_id").value;
      var x = parseInt(v_id);
      
      update(x);
      
    });
  });

      
    



function add(){
  
  
  var html =
    "<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
  for (let i = 0; i < productArr.length; i++) {
    html +=
      "<tr><td>" +
      productArr[i].id +
      "</td><td>" +
      productArr[i].name +
      "</td><td>" +
      "$" +
      productArr[i].price +
      "</td><td>" +
      productArr[i].quantity  +'</td> </tr>';
     
    }
  html += "</table>";
 
  
}

function del(a){
  
  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i].id == a) {
      
      productArr.splice(i, 1);
    }
}
}

function display(){
  var html =
  "<table> <tr> <th> SKU</th> </t> <th>   Name</th> </t> <th> Price </th< </t> <th> Quantity </th> ";
for (let i = 0; i < productArr.length; i++) {
  html +=
    "<tr><td>" +
    productArr[i].id +
    "</td><td>" +
    productArr[i].name +
    "</td><td>" +
    "$" +
    productArr[i].price +
    "</td><td>" +
    productArr[i].quantity  +'</td> </tr>';
   
  }
html += "</table>";
document.getElementById("product_list").innerHTML = html;
}

function update(x){
  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i].id == x) {
      document.getElementById("product_id").value=  productArr[i].id;
      document.getElementById("product_name").value=  productArr[i].name;
      document.getElementById("product_price").value= productArr[i].price;
      document.getElementById("product_quantity").value=  productArr[i].quantity;
      console.log(x);
    }
  }
}