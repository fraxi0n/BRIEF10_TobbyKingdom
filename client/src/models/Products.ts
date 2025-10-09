const rawDataProduct : ProductData[] = [
  {
    "id_animals_category": 3,
    "name": "Flocons pour poissons tropicaux",
    "id_product": 7,
    "price": "6.50",
    "picture_path": "images/nourriture_poisson.jpg",
    "description": "Mélange équilibré pour poissons tropicaux d’eau douce.",
    "breed_name": "Poisson tropical",
    "stock": 200,
    "id_category_product": 1
  },
  {
    "id_animals_category": 3,
    "name": "Aquarium 60L",
    "id_product": 8,
    "price": "79.90",
    "picture_path": "images/aquarium_60l.jpg",
    "description": "Aquarium en verre avec couvercle et pompe intégrée, idéal pour débutants.",
    "breed_name": null,
    "stock": 30,
    "id_category_product": 2
  },
  {
    "id_animals_category": 3,
    "name": "Poisson rouge",
    "id_product": 9,
    "price": "5.00",
    "picture_path": "images/poisson_rouge.jpg",
    "description": "Poisson rouge vif, idéal pour aquarium domestique.",
    "breed_name": "Carassius auratus",
    "stock": 50,
    "id_category_product": 3
  }
]





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

 const placeHolderProduct =  Product.fromRawData(rawDataProduct[0])

export {Product, type ProductData , placeHolderProduct}