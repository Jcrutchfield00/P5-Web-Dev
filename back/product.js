const api_url = "http://localhost:3000/api/products/";
var str = window.location.href;
console.log(str);
var url = new URL(str);
console.log(url);
var idProduct = url.searchParams.get("id");
console.log(idProduct);
var data = " ";

  
    fetch("http://localhost:3000/api/products/" + idProduct)
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

    
     productImage.setAttribute('src', data.imageUrl);
    productImage.setAttribute('alt', data.altTxt);
productTitle.innerHTML = data.name;
  productDescription.innerHTML = data.description;
    productPrice.innerHTML = data.price;
};



    //     const response = await fetch(url + locationURL);
    //   console.log(response);
    //   const locationId = locationURL.split('?%20id='); //takes away the middle man
    //   console.log(locationId[1]); //the 1 is to get the value
    //     // Storing data in form of JSON
    //     var data = await response.json();
    //     console.log(data);
     
        // below code logs all ids in console
        // for (let i = 0; i < data.length; i++){
        // var productId = data[i]._id;
        // console.log(productId);
        // }
        //below code also logs all ids in console
    //     async function getPageId(data) {
    //         for (const i in data) {
    //             const productId = data[i]._id;
    //             console.log(productId);
    //         if(locationId[1] == productId) {
    //             getOneProduct(data);
    //         console.log('yay');
    //         }
    //         else{
    //             console.log('nope');
    //            console.log(productId);
    //         }};
    //      };
    //     if (response) {
    //       console.log(response)
    //     }
    //     getPageId(data);
    //   };
    //   // Calling that async function
    //   getapi(api_url);
    //   console.log(api_url);
      
      //async function show(data) {
       
        //  data.forEach((data) => getOneProduct(data));
      //};
    //    async function getPageId(data) {
    //        if(locationId == productId) {
    //        console.log('yay');
    //        }
    //        else{
    //            console.log('nope');
    //           console.log(productId);
    //        }};
   
    // if (response) {
    //   console.log(response)
    // }
 

  // Calling that async function
