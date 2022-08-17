"use strict";
  import { products } from './models/Product.js';
let request = new XMLHttpRequest();
 request.open("GET", "http://localhost:3000/api/products", true);

 const getAllProducts = products => {
    var aTag = document.createElement('a');
    var newArticle = document.createElement('article');
    var newImage = document.createElement('img');
    var newHeading = document.createElement('h3');
    var newParagraph = document.createElement('p');

    newHeading.classList.add('productName');
    newParagraph.classList.add('productDescription');
  
    var items = document.querySelector('section');
    items.appendChild(aTag);
    aTag.appendChild(newArticle);
    newArticle.appendChild(newImage);
    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);
    
    console.log(products[0]);

  
    aTag.setAttribute('href', '/front/html/product.html? id=' + products._id);
    newImage.setAttribute('src', products.imageUrl);
    newImage.setAttribute('alt', products.altTxt);
    newHeading.innerHTML = products.name;
    newParagraph.innerHTML = products.description;
 };
 
 products.forEach(products => getAllProducts(products));
