class CartItem {
  constructor(quantity, productPrice, productTitle, sum, imageURL, outofstock) {
    this.quantity = quantity;
    this.imageURL = imageURL;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = sum;
    this.imageURL = imageURL;
    this.outofstock = outofstock;
  }
}

export default CartItem;
