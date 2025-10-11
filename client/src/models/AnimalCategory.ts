type AnimalCategoryData = {  
    id_animals_category: number,
    name: string
};

class AnimalCategory {
  id_animals_category: number;
  name: string;


  constructor(data: AnimalCategoryData) {
    this.id_animals_category = data.id_animals_category;
    this.name = data.name;

  }

  static fromRawData(rawData: AnimalCategoryData): AnimalCategory {
    return new AnimalCategory(rawData)
  }

  getName () { return this.name}
  getId () { return this.id_animals_category}
}


export {AnimalCategory, type AnimalCategoryData }