type AnimalCategoryData = {  
    id_animals_category: number,
    name: string,
    picture_path: string
};

class AnimalCategory {
  id_animals_category: number;
  name: string;
  picture_path: string;


  constructor(data: AnimalCategoryData) {
    this.id_animals_category = data.id_animals_category;
    this.name = data.name;
    this.picture_path = data.picture_path;

  }

  static fromRawData(rawData: AnimalCategoryData): AnimalCategory {
    return new AnimalCategory(rawData)
  }

  getName () { return this.name}
  getId () { return this.id_animals_category}
  getpicturePath () { return this.picture_path}
}


export {AnimalCategory, type AnimalCategoryData }