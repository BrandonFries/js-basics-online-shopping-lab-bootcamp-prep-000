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
    itemPrice: Math.floor(Math.random() * 100 + 1);
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
  string += (newitems[0] + " and " + newitems[1] + ".")
} else if (newitems.length > 2) {
  var lastitem = newitems.pop()
  var miditems = newitems.join(", ")
  string += (miditems + ", and " + lastitem + ".")
}
return string
}

 function total() {

 }


 function removeFromCart(item) {

 }


 function placeOrder(cardNumber) {

 }
