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
    data = await resultAPI;
        if (data){
            getOneProduct(data);
        }
     
    })
    

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
    var i;

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

    

//addtocartbutton isworking but need to figure out howto get it to the cart page
document.getElementById('addToCart').addEventListener("click", clickAddToCart)
function clickAddToCart(){
    let cart = [];
   
   
    const selectColor = colors.value;
    console.log(selectColor);
    const selectQuantity = document.getElementById("quantity").value
    console.log(selectQuantity);
    if(localStorage.getItem('products')) {

    
           cartItemContent = JSON.parse(localStorage.getItem);
           console.log("Hi, " + cartItemContent);
    }     
    cart.push({"id" : productId, "color" : selectColor, "quantity" : selectQuantity})
    console.log(cart);
    //Then push to localStorage  
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log("Hi there");
    console.log(localStorage);
    //above working great
    //below try if/else
    if(selectQuantity === "0"){
        console.log("error!")
        // localStorage.removeItem("cartItems");
    } else{
        console.log('yay!')
    };
    //below example from mentor confusing
    // if (selectQuantity === "0") {    
    //     let itemIndex = cartItems.item.findIndex(item => data.id === id && data.color === selectColor)
    //     const cartQuantity = +cartItems.item[`${itemIndex}`].quantity
    //     const quantityToAdd = +selectQuantity
    //       cartItems.item[`${itemIndex}`].quantity = `${cartQuantity + quantityToAdd}`
    // }
};