//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

var changeFP = document.getElementById('disclaimer');
changeFP.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

var update1 = document.getElementById('brand1');
update1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

var update2 = document.getElementById('item1');
update2.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.

var update3 = document.getElementById('price1');
update3.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

var update4 = document.getElementById('discount1');
update4.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

var update5 = document.createElement('div');
update5.id = 'item2';
update5.innerHTML = "Hendrick's Gin";
var williamDiv = document.getElementById('brand2');
williamDiv.appendChild(update5);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var newDiv1 = document.createElement('div');
newDiv1.id = 'price2';
newDiv1.innerHTML = '$34.99';
item2.appendChild(newDiv1);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var newButton1 = document.createElement('button');
newButton1.id = 'discount3';
newButton1.innerHTML = '50% OFF Axe body soap!';
var whatBlock3 = document.getElementsByClassName('block3 col-sm-4');
console.log(whatBlock3);
whatBlock3[0].appendChild(newButton1);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

var whatItem = document.getElementsByClassName('item');
console.log(whatItem); //panda express item is index 0
whatItem[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var newButton2 = document.createElement('button');
newButton2.className = 'discount';
newButton2.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
var whatPrice = document.getElementsByClassName('price');
console.log(whatPrice); //panda express price is index 0
whatPrice[0].appendChild(newButton2);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

var whatBrand = document.getElementsByClassName('brand');
console.log(whatBrand); //Uniqlo brand is index 1
whatBrand[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

whatPrice[1].innerHTML = '$10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

var headphoneDiv = document.createElement('div');
headphoneDiv.className = 'brand';
headphoneDiv.innerHTML = 'Hifiman Shangri-La';
whatBlock3[1].appendChild(headphoneDiv);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

var newDiv2 = document.createElement('div');
newDiv2.className = 'item';
newDiv2.innerHTML = 'Electronstatic Headphones';
whatBlock3[1].appendChild(newDiv2);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

var headphonePrice = document.createElement('div');
headphonePrice.className = 'price';
headphonePrice.innerHTML = '$18,000';
whatBlock3[1].appendChild(headphonePrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

var headphoneDisc = document.createElement('button');
headphoneDisc.className = 'discount';
headphoneDisc.innerHTML = 'Free Barry Manilow CD with purchase!';
whatBlock3[1].appendChild(headphoneDisc);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

whatBrand[3].innerHTML = 'H&M';
whatItem[3].innerHTML = 'Unicorn-Head Slippers';
whatPrice[3].innerHTML = '$21.99';
var whatDisc = document.getElementsByClassName('discount');
console.log(whatDisc);
whatDisc[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

whatBrand[4].innerHTML = 'Frito Lay';
whatItem[4].innerHTML = "Poppin' Jalapeno Doritos";
whatPrice[4].innerHTML = '$7.77';
whatDisc[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

whatBrand[5].innerHTML = 'Any Dog Breeder';
whatItem[5].innerHTML = "Baby Puggy";
whatPrice[5].innerHTML = 'Priceless';
whatDisc[5].innerHTML = 'No Discounts. This cutie is worth every penny!';


//Final Boss 
//Create your own product for the last three sections.

var whatImg = document.getElementsByTagName('img');
console.log(whatImg);


//block1
whatImg[10].src = 'https://www.buffalowildwings.com/globalassets/promos/bonelessthursdayhero.png';
whatBrand[6].innerHTML = 'Buffalo Wild Wings';
whatItem[6].innerHTML = "Chicken Wings!";
whatPrice[6].innerHTML = '$8.99';
whatDisc[6].innerHTML = 'Wing Wednesdays - 50% off wings!!';

//block2
var whatBlock2 = document.getElementsByClassName('block2 col-sm-4');
console.log(whatBlock2);

whatImg[11].src = 'https://i.ebayimg.com/images/g/GtgAAOSwxSZbx2P8/s-l300.jpg';

var tgBrand = document.createElement('div');
tgBrand.className = 'brand';
tgBrand.innerHTML = 'Tokyo Ghoul';
whatBlock2[3].appendChild(tgBrand);

var tgItem = document.createElement('div');
tgItem.className = 'item';
tgItem.innerHTML = 'Volume 1-14 Boxed Set';
whatBlock2[3].appendChild(tgItem);

var tgPrice = document.createElement('div');
tgPrice.className = 'price';
tgPrice.innerHTML = "$200.00";
whatBlock2[3].appendChild(tgPrice);

var tgButton = document.createElement('button');
tgButton.className = 'discount';
tgButton.innerHTML = 'Free Tokyo Ghoul shirt with purchase!';
whatBlock2[3].appendChild(tgButton);

//block3

whatImg[12].src = 'https://pbs.twimg.com/media/DBze4HPXoAIcQJt.jpg';

var nanoLeafBrand = document.createElement('div');
nanoLeafBrand.className = 'brand';
nanoLeafBrand.innerHTML = 'nanoleaf';
whatBlock3[3].appendChild(nanoLeafBrand);

var nanoItem = document.createElement('div');
nanoItem.className = 'item';
nanoItem.innerHTML = 'nanoleaf tiles';
whatBlock3[3].appendChild(nanoItem);

var nanoPrice = document.createElement('div');
nanoPrice.className = 'price';
nanoPrice.innerHTML = "$554.43";
whatBlock3[3].appendChild(nanoPrice);

var nanoButton = document.createElement('button');
nanoButton.className = 'discount';
nanoButton.innerHTML = '20% off your next purchase';
whatBlock3[3].appendChild(nanoButton);