"use strict";
// api url
const api_url = "http://localhost:3000/api/products";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML

function show(data) {
  const getAllProducts = (data) => {
    var aTag = document.createElement("a");
    var newArticle = document.createElement("article");
    var newImage = document.createElement("img");
    var newHeading = document.createElement("h3");
    var newParagraph = document.createElement("p");

    newHeading.classList.add("productName");
    newParagraph.classList.add("productDescription");

    var items = document.querySelector("section");
    items.appendChild(aTag);
    aTag.appendChild(newArticle);
    newArticle.appendChild(newImage);
    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);

    console.log(data);

    aTag.setAttribute("href", "/front/html/product.html? id=" + data._id);
    newImage.setAttribute("src", data.imageUrl);
    newImage.setAttribute("alt", data.altTxt);
    newHeading.innerHTML = data.name;
    newParagraph.innerHTML = data.description;
  };

  data.forEach((data) => getAllProducts(data));
}

//  import { products } from './models/Product.js';
// let request = new XMLHttpRequest();
//  request.onreadystatechange=function() {
//      if (request.readyState === 4){
//          if(request.status === 200){  (200)

//          } else {
//              error_handle_function();
//          }
//      }
//  }
//  request.open("GET", "http://localhost:3000/api/products", true);
// //  request.open('GET', url, true);
// //  request.sendMultipart(object);

//  const getAllProducts = products => {
//     var aTag = document.createElement('a');
//     var newArticle = document.createElement('article');
//     var newImage = document.createElement('img');
//     var newHeading = document.createElement('h3');
//     var newParagraph = document.createElement('p');

//     newHeading.classList.add('productName');
//     newParagraph.classList.add('productDescription');

//     var items = document.querySelector('section');
//     items.appendChild(aTag);
//     aTag.appendChild(newArticle);
//     newArticle.appendChild(newImage);
//     newArticle.appendChild(newHeading);
//     newArticle.appendChild(newParagraph);

//     console.log(products[0]);

//     aTag.setAttribute('href', '/front/html/product.html? id=' + products._id);
//     newImage.setAttribute('src', products.imageUrl);
//     newImage.setAttribute('alt', products.altTxt);
//     newHeading.innerHTML = products.name;
//     newParagraph.innerHTML = products.description;
//  };

//  products.forEach(products => getAllProducts(products));
