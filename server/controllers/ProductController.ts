import { Controller } from "../libs/Controller";
import { productRepository } from "../repositories/productRepository";

export class ProductController extends Controller {
  // Route GET `/products` - liste 


  public async browseProducts() {
    const repo = new productRepository();
    const result = await repo.findAll();

    this.errorManager(result);
    this.response.json(JSON.stringify(result));
  }

  
  public async browseProductsFromCat() {
    const repo = new productRepository();
    const result = await repo.findAll();

    this.errorManager(result);
    this.response.json(JSON.stringify(result));
  }

  // Route GET `/products/:id` - détail 
  public async readProduct() {
    const targetID =   parseInt( this.request.params.id )

        const repo = new productRepository();
    const result = await repo.findTargetById(targetID);

    this.errorManager(result);

    this.response.json(JSON.stringify(result));
  }



    public async readRandomProduct() {//todo

        const repo = new productRepository();
    const result = await repo.findRandomTarget();
    this.errorManager(result);

    this.response.json(JSON.stringify(result));
  }







  public async createProduct() {
    return this.response.json({});
  }

  public async createProductSubmission() {
        return this.response.json({});
  }

  public async editProduct() {
        return this.response.json({});
  }

  public async editProductSubmission() {
        return this.response.json({});
  }

  public async deleteProduct() {
        return this.response.json({});
  }
}
