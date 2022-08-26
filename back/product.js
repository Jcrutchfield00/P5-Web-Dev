"use strict";
// var queryString = window.location.search;

// console.log(queryString);

// import { response } from 'express'; //happened when i placed fetch inside my function in the code below
 const url = window.location.href;//obtain the url of the current page
  console.log(url);
 const newURL = new URL(url);//store the window url as an object with the 
// //  //JS keyword new
 const id = newURL.searchParams.get('id');
  console.log(id);//saysnull
  
 
// new URLSearchParams()
// new URLSearchParams(init)
// //paste below code in console window to get the urlquerystring
var item = ' ';

function getItem () {
    fetch("http://localhost:3000/api/products/" + id)
    .then((res) => {
        return res.json();
    })

    .then(async function (resultAPI) {
        item = await resultAPI;
        if (item){
            getOneProduct(item);
        }
    })
    .catch((error) => {
        console.log(" request error");
    })
}


    function getOneProduct(item) {
        // fetch(queryString)
        // .then (response => {
        //     console.log(response);
        // });
       var productPrice = document.getElementById('price');
       var productTitle = document.getElementById('title');
//       var productId = document.getElementsByClassName('item');

       var productDescription = document.getElementById('description');
       var productImage = document.createElement('img');
       var parentDiv = document.querySelector('div.item__img');
       parentDiv.appendChild(productImage);

    //    productImage.setAttribute('href', '/front/html/product.html? id=' + products._id)
    //    productImage.setAttribute('src', products.imageUrl);
    //   productImage.setAttribute('alt', products.altTxt);
    //    productTitle.innerHTML = item.name;
    //    productDescription.innerHTML = item.description;
    //    productPrice.innerHTML = item.price;
    };
 
    getOneProduct();

    getItem();


