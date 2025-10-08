const rawDataProduct = "[{\"id_product\":1,\"name\":\"Croquettes pour chat adulte\",\"price\":\"19.99\",\"picture_path\":\"images/croquettes_chat.jpg\",\"description\":\"Croquettes équilibrées riches en protéines et taurine pour chats adultes.\",\"breed_name\":\"Chat européen\",\"stock\":120,\"id_category_product\":1}]"

type ProductData = {
  id_product: number;
  name: string;
  price: string;
  picture_path: string;
  description: string;
  breed_name: string;
  stock: number;
  id_category_product: number;
};

class Product {
  id: number;
  name: string;
  price: number;
  picturePath: string;
  description: string;
  breedName: string;
  stock: number;
  categoryId: number;

  constructor(data: ProductData) {
    this.id = data.id_product;
    this.name = data.name;
    this.price = parseFloat(data.price);
    this.picturePath = data.picture_path;
    this.description = data.description;
    this.breedName = data.breed_name;
    this.stock = data.stock;
    this.categoryId = data.id_category_product;
  }

  static fromRawData(rawData: string | ProductData | ProductData[]): Product | Product[] {
    const data = typeof rawData === "string" ? JSON.parse(rawData) : rawData;
    return Array.isArray(data) ? data.map(d => new Product(d)) : new Product(data);
  }
}

 const placeHolderProduct =  Product.fromRawData(rawDataProduct)

export {Product, type ProductData , placeHolderProduct}