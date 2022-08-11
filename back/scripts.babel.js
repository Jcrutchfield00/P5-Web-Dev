"use strict";

// URL myURL = new URL("http://127.0.0.1:5500/front/html/index.html");
// URL cartURL = new URL(myURL, "cart.html");
// URL confirmationURL = new URL(myURL, "confirmation.html");
// URL productURL = new URL(myURL, "product.html");
//get product on homepage
// document.getElementById('image').src = '';
// const img1 = document.createElement("img");
// img1.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap01.jpeg";
// const img2 = document.createElement("img");
// img2.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap02.jpeg";
// const img3 = document.createElement("img");
// img3.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap03.jpeg";
// const img4 = document.createElement("img");
// img4.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap04.jpeg";
// const img5 = document.createElement("img");
// img5.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap05.jpeg";
// const img6 = document.createElement("img");
// img6.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap06.jpeg";
// const img7 = document.createElement("img");
// img7.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap07.jpeg";
// const img8 = document.createElement("img");
// img8.src = "D:\school/p5retry/P5-Web-Dev-Kanap-master/back/images/kanap08.jpeg";


// document.body.appendChild(img1);
// document.querySelector(".items").appendChild(img1);
// document.getElementById("someId").appendChild(img1);

var sinope = {
  "colors": ["Blue", "White", "Black"],
  "_id": "107fb5b75607497b96722bda5b504926",
  "name": "Kanap Sinopé",
  "price": 1849,
  "imageUrl": "/back/images/kanap01.jpeg",
  "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "altTxt": "Photo of a blue sofa, two seats"
};
console.log(sinope.name);
console.log(sinope.description);
console.log(sinope.imageUrl);
var cyllene = {
  "colors": ["Black/Yellow", "Black/Red"],
  "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
  "name": "Kanap Cyllène",
  "price": 4499,
  "imageUrl": "/back/images/kanap02.jpeg",
  "description": "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
  "altTxt": "Photo of a yellow and black sofa, four seats"
};
console.log(cyllene.name);
console.log(cyllene.description);
console.log(cyllene.imageUrl);

var calyce = {
  "colors": ["Green", "Red", "Orange"],
  "_id": "055743915a544fde83cfdfc904935ee7",
  "name": "Kanap Calycé",
  "price": 3199,
  "imageUrl": "/back/images/kanap03.jpeg",
  "description": "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
  "altTxt": "Photo of a green angle sofa, three seats"
};
console.log(calyce.name);
console.log(calyce.description);
console.log(calyce.imageUrl);

var autonoe = {
  "colors": ["Pink", "White"],
  "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
  "name": "Kanap Autonoé",
  "price": 1499,
  "imageUrl": "/back/images/kanap04.jpeg",
  "description": "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
  "altTxt": "Photo of a pink sofa, one to two seats"
};
console.log(autonoe.name);
console.log(autonoe.description);
console.log(autonoe.imageUrl);

var eurydome = {
  "colors": ["Grey", "Purple", "Blue"],
  "_id": "8906dfda133f4c20a9d0e34f18adcf06",
  "name": "Kanap Eurydomé",
  "price": 2249,
  "imageUrl": "/back/images/kanap05.jpeg",
  "description": "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
  "altTxt": "Photo of a gray sofa, three seats"
};
console.log(eurydome.name);
console.log(eurydome.description);
console.log(eurydome.imageUrl);

var helice = {
  "colors": ["Grey", "Navy"],
  "_id": "77711f0e466b4ddf953f677d30b0efc9",
  "name": "Kanap Hélicé",
  "price": 999,
  "imageUrl": "/back/images/kanap06.jpeg",
  "description": "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
  "altTxt": "Photo of a gray sofa, two seats"
};
console.log(helice.name);
console.log(helice.description);
console.log(helice.imageUrl);

var thyone = {
  "colors": ["Red", "Silver"],
  "_id": "034707184e8e4eefb46400b5a3774b5f",
  "name": "Kanap Thyoné",
  "price": 1999,
  "imageUrl": "/back/images/kanap07.jpeg",
  "description": "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
  "altTxt": "Photo of a red sofa, two seats"
};
console.log(thyone.name);
console.log(thyone.description);
console.log(thyone.imageUrl);

var orthosie = {
  "colors": ["Pink", "Brown", "Yellow", "White"],
  "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
  "name": "Kanap orthosie",
  "price": 3999,
  "imageUrl": "/back/images/kanap08.jpeg",
  "description": "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
  "altTxt": "Photo of a pink sofa, three seats"
};
console.log(orthosie.name);
console.log(orthosie.description);
console.log(orthosie.imageUrl);

// let newArticle = document.createElement('article');
//     let newImage = document.createElement('img');
//     let newHeading = document.createElement('h3');
//     let newParagraph = document.createElement('p');
//     newHeading.textContent = 'aticle01'
//     newParagraph.textContent = 'hey am i doing this right?'
//     newArticle.appendChild(newImage);
//     newArticle.appendChild(newHeading);
//     newArticle.appendChild(newParagraph);
//     newHeading.classList.add('productName');
//     newParagraph.classList.add('productDescription');
//     newImage['src'] = "\images/kanap01.jpeg";

//     const items = document.querySelector('section');
//     items.appendChild(newArticle);

//below code works as a loop to create the same image and descritpion multiple times
var product = ["sinope"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = sinope.name;
  newParagraph.textContent = sinope.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = sinope.imageUrl;
  newImage['alt'] = sinope.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

var product = ["cyllene"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = cyllene.name;
  newParagraph.textContent = cyllene.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = cyllene.imageUrl;
  newImage['alt'] = cyllene.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

var product = ["calyce"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = calyce.name;
  newParagraph.textContent = calyce.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = calyce.imageUrl;
  newImage['alt'] = calyce.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

var product = ["autonoe"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = autonoe.name;
  newParagraph.textContent = autonoe.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = autonoe.imageUrl;
  newImage['alt'] = autonoe.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

var product = ["eurydome"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = eurydome.name;
  newParagraph.textContent = eurydome.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = eurydome.imageUrl;
  newImage['alt'] = eurydome.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

var product = ["helice"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = helice.name;
  newParagraph.textContent = helice.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = helice.imageUrl;
  newImage['alt'] = helice.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

var product = ["thyone"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = thyone.name;
  newParagraph.textContent = thyone.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = thyone.imageUrl;
  newImage['alt'] = thyone.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

var product = ["orthosie"];
for (var i = 0; i < product.length; i++) {
  var aTag = document.createElement('a');
  var newArticle = document.createElement('article');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h3');
  var newParagraph = document.createElement('p');
  newHeading.textContent = orthosie.name;
  newParagraph.textContent = orthosie.description;
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  newHeading.classList.add('productName');
  newParagraph.classList.add('productDescription');
  newImage['src'] = orthosie.imageUrl;
  newImage['alt'] = orthosie.altTxt;

  var items = document.querySelector('section');
  items.appendChild(aTag);
  aTag.appendChild(newArticle);
  console.log(product[0]);
};

//TO-DO: create a code that imports the different items and pictures
// class product{
//     constructor(colors, _id, name, price, imageUrl, description, altTxt){
//         this.colors = colors;
//          this._id = _id;
//           this.name = name;
//            this.price = price; 
//            this.imageUrl = imageUrl;
//             this.description = description; 
//             this.altTxt = altTxt;
//     }
// }

// let sinopé = new product(["Blue", "White", "Black"], "107fb5b75607497b96722bda5b504926", "Kanap Sinopé", 1849, "/back/images/kanap01.jpeg", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Photo of a blue sofa, two seats");

// let cyllene = new product(["Black/Yellow", "Black/Red"], "415b7cacb65d43b2b5c1ff70f3393ad1", "Kanap Cyllène", 4499, "/back/images/kanap02.jpeg", "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.", "Photo of a yellow and black sofa, four seats");

// let calyce = new product(["Green", "Red", "Orange"], "055743915a544fde83cfdfc904935ee7", "Kanap Calycé", 3199, "/back/images/kanap03.jpeg", "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.", "Photo of a green angle sofa, three seats");

// let autonoe = new product(["Pink", "White"], "a557292fe5814ea2b15c6ef4bd73ed83", "Kanap Autonoé", 1499, "/back/images/kanap04.jpeg", "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.", "Photo of a pink sofa, one to two seats");

// let eurydome = new product(["Grey", "Purple", "Blue"], "8906dfda133f4c20a9d0e34f18adcf06", "Kanap Eurydomé", 2249, "/back/images/kanap05.jpeg", "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.", "Photo of a gray sofa, three seats");

// let helice = new product(["Grey", "Navy"], "77711f0e466b4ddf953f677d30b0efc9", "Kanap Hélicé", 999, "/back/images/kanap06.jpeg", "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.", "Photo of a gray sofa, two seats");

// let thyone = new product(["Red", "Silver"], "034707184e8e4eefb46400b5a3774b5f", "Kanap Thyoné", 1999, "/back/images/kanap07.jpeg", "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.", "Photo of a red sofa, two seats");

// let orthosie = new product(["Pink", "Brown", "Yellow", "White"], "a6ec5b49bd164d7fbe10f37b6363f9fb", "Kanap orthosie", 3999, "/back/images/kanap08.jpeg", "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.", "Photo of a pink sofa, three seats");

// let furnitureList = ["sinope", "cyllene", "calyce", "autonoe", "eurydome", "helice", "thyone", "orthosie"];

// for (let i = 0; i < furnitureList.length; i++) {
//     let newArticle = document.createElement('article');
//     let newImage = document.createElement('img');
//     let newHeading = document.createElement('h3');
//     let newParagraph = document.createElement('p');
//     newHeading.textContent = this.name;
//     newParagraph.textContent = this.description;
//     newArticle.appendChild(newImage);
//     newArticle.appendChild(newHeading);
//     newArticle.appendChild(newParagraph);
//     newHeading.classList.add('productName');
//     newParagraph.classList.add('productDescription');
//     newImage['src'] = this.imageUrl;

//     const items = document.querySelector('section');
//     items.appendChild(newArticle);
//     console.log(furnitureList[7])
//  };

//  export { furnitureList };
//not working due to export error

//tried it on product.js cant get that to work either
// function displayAllProducts() {
//   setTimeout(() =>{
//     let output ='';
//     products.forEach((product, index) => {
//       output += '<a>${product.name}</a>'
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// getdisplayAllProducts();
