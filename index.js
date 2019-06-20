var cart = [];


function getCart() {
  return cart;
}

function setCart(c) {
   cart = c;
  return cart; 0
}


function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var itemName = {itemName: itemName, itemPrice: itemPrice};
  cart.push({
    [item] : itemPrice,
    itemName: item,
    itemPrice: itemPrice
  })
  return(item + " has been added to your cart.")

}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var newitems = [];
  for (var i = 0; i < cart.length; i++) {
    var obj = Object.keys(cart[i])[0]
     newitems.push( obj + " at $" + cart[i][obj])
  }
  var string = "In your cart, you have "
  if (newitems.length === 1) {
  string += newitems + "."
} else if (newitems.length === 2) {
  string += (newitems[0] + ", and " + newitems[1] + ".")
} else if (newitems.length > 2) {
  var lastitem = newitems.pop()
  var miditems = newitems.join(", ")
  string += (miditems + ", and " + lastitem + ".")
}
return string
}

 function total() {
   var b = 0
   for (var i = 0; i < cart.length; i ++) {
     b +=cart[i].itemPrice
   }
return b
 }

 function removeFromCart(item) {
   for (var i = 0; i < cart.length; i++) {
     if(cart[i].itemName === item) {
       cart.splice(i,1)
       return cart
     }
   }
   return 'That item is not in your cart.'

 }


 function placeOrder(cardNumber) {
   var cardNumber = 83296759
   if(!cardNumber) {
     return "Sorry, we dont have a credit card on file for you.";
   }
   var order = 'Your total cost is $ ' + total() + 'which will be charged to the card '+ cardNumber + '.';
   cart = [];
   return order

 }
