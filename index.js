var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.random(1,100);
  var object = {}
  object[item] = price
  cart.push(object) ;
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }

  var itemsAndPrices = []

  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  var cartItems = Object.keys(cart[0])
  if (cart[0].hasOwnProperty(item) == false){
    return console.log('That item is not in your cart.')
  } else{
    for (var cartItems in cart[0] ){
      if( cartItems == item){
        delete cart[0][cartItems]
      }
    }
    return cart
  }
}

function placeOrder(card) {
  if (card == null){
    return console.log("We don't have a credit card on file for you to place your order.")
  } else{
    var price = 0
    var cartItems = Object.keys(cart[0])
    for(var cartItems in cart[0]){
      price += cart[0][cartItems]
    }
    cart = []
    return "Your total cost is $" +price +", which will be charged to the card" + card +"."
  }

}