class Product {
  constructor(
    id,
    ownerId,
   // category,
    title,
    imageUrl,
    description,
    price,
    mrp,
    kg,
    outofstock
  ) {
    this.id = id;
    this.ownerId = ownerId;
   // this.category = category;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.mrp = mrp;
    this.kg = kg;
    this.outofstock = outofstock;
  }
}

export default Product;
