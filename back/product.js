const api_url = "http://localhost:3000/api/products/";
var str = window.location.href;
console.log(str);
var url = new URL(str);
console.log(url);
var productId = url.searchParams.get("id");
console.log(productId);
var data = " ";

  
    fetch("http://localhost:3000/api/products/" + productId)
    .then((data) => {
        return data.json();
    })
    .then(async function (resultAPI) {
    var data = await resultAPI;
        if (data){
            getOneProduct(data);
        }
     
    });
   
    function getOneProduct (data) {
    var productPrice = document.getElementById('price');
    var productTitle = document.getElementById('title');
   var productDescription = document.getElementById('description');
    var productImage = document.createElement('img');
    var parentDiv = document.querySelector('div.item__img');
    parentDiv.appendChild(productImage);
    //below create the color option for dropdown menu
    var select = document.getElementById("colors"); 
    var colorOption = data.colors; 
    console.log(colorOption);
    

    for(i = 0; i < colorOption.length; i++) {
        var colors = colorOption[i];
        var optionElement = document.createElement("option");
        optionElement.textContent = colors;
        optionElement.value = colors;
        select.appendChild(optionElement);
    }
    //above code ends dropdown menu
     productImage.setAttribute('src', data.imageUrl);
    productImage.setAttribute('alt', data.altTxt);
productTitle.innerHTML = data.name;
  productDescription.innerHTML = data.description;
    productPrice.innerHTML = data.price;
};


//below is the code for the cart storage
const cartItems = [] || JSON.parse(localStorage.getItem('cartItems'));
function updateCart(){
    console.log(cartItems);
    const selectPrice = document.getElementById("price").innerText;
     console.log(selectPrice);
     const selectName = document.getElementById("title").innerText;
     console.log(selectName);
     const selectColor = document.getElementById("colors").value;
     console.log(selectColor);
     const selectQuantity = document.getElementById("quantity").value;
     console.log(selectQuantity);
    if(!cartItems){
        console.log('not working!');
        // cartItems = [];
        var item = {'item' : []};
    }else{
        console.log('working');
        cartItems.push({"id" : productId, "color" : selectColor, "quantity" : selectQuantity, "price" : selectPrice, "title" : selectName}) 
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
};

// const selectPrice = document.getElementById("price").innerText;
// console.log(selectPrice);
// const selectName = document.getElementById("title").innerText;
// console.log(selectName);
// const selectColor = document.getElementById("colors").value;
// console.log(selectColor);
// const selectQuantity = document.getElementById("quantity").value;
// console.log(selectQuantity);



//addtocartbutton isworking but need to figure out howto get it to the cart page
document.getElementById('addToCart').addEventListener("click", clickAddToCart)
function clickAddToCart(){
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    console.log("Hi there");
    console.log(localStorage);
    const selectPrice = document.getElementById("price").innerText;
     console.log(selectPrice);
     const selectName = document.getElementById("title").innerText;
     console.log(selectName);
     const selectColor = document.getElementById("colors").value;
     console.log(selectColor);
     const selectQuantity = document.getElementById("quantity").value;
     console.log(selectQuantity);
     const selectedQuantity=document.getElementById("quantity");
     const colorSelected = document.getElementById( "color");
     
     if (selectedQuantity === "0") {    
        let itemIndex = cartItems.item.findIndex(item => data.id === id && data.color === selectColor)
        const cartQuantity = +cartItems.item[`${itemIndex}`].quantity
        const quantityToAdd = +selectedQuantity
          cartItems.item[`${itemIndex}`].quantity = `${cartQuantity + quantityToAdd}`
    }
    if (selectedQuantity === "0") {  
       if  ((cartItems.item.find(item =>item.id === id && item.color === colorSelected)));
};
    if(selectQuantity === "0"){
        console.log("error!")
         localStorage.removeItem("cartItems");
    } else{
        console.log('yay!')
       // cartItems.push({"id" : productId, "color" : selectColor, "quantity" : selectQuantity, "price" : selectPrice, "title" : selectName})
     console.log(cartItems);
    //  localStorage.setItem("cartItems", JSON.stringify(cartItems));
         updateCart();
    };
};
   
    //below example from mentor confusing
//      if (selectedQuantity === "0") {    
//          let itemIndex = cartItems.item.findIndex(item => data.id === id && data.color === selectColor)
//          const cartQuantity = +cartItems.item[`${itemIndex}`].quantity
//          const quantityToAdd = +selectedQuantity
//            cartItems.item[`${itemIndex}`].quantity = `${cartQuantity + quantityToAdd}`
//      }

//      const colorSelected = document.getElementById( "color");
//      if (selectedQuantity === "0") {  
//         if  ((cartItems.item.find(item =>item.id === id && item.color === colorSelected)));
// };
//belowcode shows 0
//  async function removeFromCart(){
//      let index = cartItems.findIndex(cartItems => cartItems.id ==
//          productId);
//          console.log(index);
//          if(selectedQuantity === "0"){
//             console.log("error!")
//            // localStorage.removeItem("cartItems");
//          }
//  };

// async function updateCartTotal(){
//     const selectPrice = document.getElementById("price").innerText;
//  console.log(selectPrice);
//  const selectName = document.getElementById("title").innerText;
//  console.log(selectName);
//  const selectColor = document.getElementById("colors").value;
//  console.log(selectColor);
//  const selectQuantity = document.getElementById("quantity").value;
//  console.log(selectQuantity);
//     const selectedQuantity=document.getElementById("quantity");
//     if (selectedQuantity === "0") {    
//         let itemIndex = cartItems.item.findIndex(item => data.id === id && data.color === selectColor)
//         const cartQuantity = +cartItems.item[`${itemIndex}`].quantity
//         const quantityToAdd = +selectedQuantity
//           cartItems.item[`${itemIndex}`].quantity = `${cartQuantity + quantityToAdd}`
//     }

//     const colorSelected = document.getElementById( "color");
//     if (selectedQuantity === "0") {  
//        if  ((cartItems.item.find(item =>item.id === id && item.color === colorSelected)));
// };
//      cartItems.push({"id" : productId, "color" : selectColor, "quantity" : selectQuantity, "price" : selectPrice, "title" : selectName})
//      console.log(cartItems);
//     //Then push to localStorage  
//      localStorage.setItem("cartItems", JSON.stringify(cartItems))
//      console.log("Hi there");
//      console.log(localStorage);
//     //  cartItems.forEach(item => {
//     //      removeFromCart();
//     //  });
// };

// async function displayCart(){
// updateCartTotal();
// }