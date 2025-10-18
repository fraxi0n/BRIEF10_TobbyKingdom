import { Controller } from "../libs/Controller";
import { productRepository } from "../repositories/productRepository";

export class ProductController extends Controller {


  public async browseProducts() {
    const repo = new productRepository();
    const result = await repo.findAll();

    return this.errorManager(result);
  }

  
  public async browseProductsFromRace() {
    const targetID =   parseInt( this.request.params.id )

    const repo = new productRepository();
    const result = await repo.findAllByRaceID(targetID);

    return this.errorManager(result);
    // this.response.json(JSON.stringify(result));
  }

  // Route GET `/products/:id` - détail 
  public async readProduct() {
    const targetID =   parseInt( this.request.params.id )

        const repo = new productRepository();
    const result = await repo.findTargetById(targetID);

    return this.errorManager(result);

    // this.response.json(JSON.stringify(result));
  }



    public async readRandomProduct() {//todo

        const repo = new productRepository();
    const result = await repo.findRandomTarget();
    return this.errorManager(result);

  }

    public async browseNewProducts() {

    const repo = new productRepository();
    const result = await repo.findNew();
    return this.errorManager(result);
  }
}
