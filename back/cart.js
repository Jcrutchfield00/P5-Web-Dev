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


function show(data) {
    //below is the code for first block of section id=cart__items
      var newArticle = document.createElement("article");
      var cartItemImgDiv = document.createElement("div");
      var newImage = document.createElement("img");
      var cartItems = document.getElementById("cart__items");
      newArticle.classList.add("cart__item");
      cartItemImgDiv.classList.add("cart__item__img");
      cartItems.appendChild(newArticle);
      newArticle.appendChild(cartItemImgDiv);
      cartItemImgDiv.appendChild(newImage);
      newImage.setAttribute("src", data.imageUrl);
      newImage.setAttribute("alt", data.altTxt);
   
    //below is the code for second block of section id=cart__items
    var cartItemContentDiv = document.createElement("div");
    var cartItemContentDescription = document.createElement("div");
    var newHeading = document.createElement("h2");
    var newParagraphColor = document.createElement("p");
    var newParagraphPrice = document.createElement("p");
    cartItemContentDiv.classList.add("cart__item__content");
    cartItemContentDescription.classList.add("cart__item__content__description");
    
      newArticle.appendChild(cartItemContentDiv);
      cartItemContentDiv.appendChild(cartItemContentDescription);
      cartItemContentDescription.appendChild(newHeading);
      cartItemContentDescription.appendChild(newParagraphColor);
      cartItemContentDescription.appendChild(newParagraphPrice);

      //below is the code for the third block of section id=cart__items
      var cartItemContentSettings = document.createElement("div");
      var cartItemContentSettingsQuantity = document.createElement("div");
      var newParagraphQty = document.createElement("p");
      var input = document.createElement("input");
      cartItemContentSettings.classList.add("cart__item__content__settings");
      cartItemContentSettingsQuantity.classList.add("cart__item__content__settings__quantity");
      
        cartItemContentDiv.appendChild(cartItemContentSettings);
        cartItemContentSettings.appendChild(cartItemContentSettingsQuantity);
        cartItemContentSettingsQuantity.appendChild(newParagraphQty);
        cartItemContentSettingsQuantity.appendChild(input);
        
   //below is the code for the fourth block of section id=cart__items
     var cartItemContentSettingsDelete = document.createElement("div");
      var newParagraphDelete = document.createElement("p");
    cartItemContentSettingsDelete.classList.add("cart__item__content__settings__delete");
     newParagraphDelete.classList.add("deleteItem");
     cartItemContentSettings.appendChild(cartItemContentSettingsDelete);
     cartItemContentSettingsDelete.appendChild(newParagraphDelete);


    };
  