class Product {
  constructor(
    id,
    ownerId,
    title,
    imageUrl,
    description,
    price,
    cutprice,
    kg
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.cutprice = cutprice;
    this.kg = kg;
  }
}

export default Product;
