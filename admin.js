const productForm =
document.getElementById("productForm");

const tableBody =
document.getElementById("productTableBody");

let products =
JSON.parse(
localStorage.getItem("products")
) || [];

function renderProducts(){

tableBody.innerHTML = "";

products.forEach((product,index)=>{

tableBody.innerHTML += `

<tr>

<td>${product.name}</td>

<td>${product.price}</td>

<td>${product.category}</td>

<td>

<button
onclick="deleteProduct(${index})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById(
"totalProducts"
).innerText =
products.length;

localStorage.setItem(
"products",
JSON.stringify(products)
);

}

productForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const product = {

name:
document.getElementById(
"productName"
).value,

price:
document.getElementById(
"productPrice"
).value,

category:
document.getElementById(
"productCategory"
).value

};

products.push(product);

renderProducts();

productForm.reset();

});

function deleteProduct(index){

products.splice(index,1);

renderProducts();

}

renderProducts();