
type ProductData = {
  id_animals_category? : number
  id_product: number;
  name: string;
  price: string;
  picture_path: string;
  description: string;
  breed_name: string | null
  stock: number;
  id_category_product: number;
};

class Product {
  id: number;
  name: string;
  price: number;
  picturePath: string;
  description: string;
  breedName?: string| null
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

  static fromRawData(rawData: ProductData): Product {
    return new Product(rawData)
  }

  getName () { return this.name}
}


export {Product, type ProductData}