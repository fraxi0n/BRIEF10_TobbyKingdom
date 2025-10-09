import { Controller } from "../libs/Controller";
import { animalsCategoryRepository } from "../repositories/animalCategoryRepository";

export class AnimalsCategoryController extends Controller {
  // Route GET `/products` - liste 


  public async browseAnimalsCategory() {
    const repo = new animalsCategoryRepository();
    const result = await repo.findAll();

    console.log(result)

    this.errorManager(result);
  }
}