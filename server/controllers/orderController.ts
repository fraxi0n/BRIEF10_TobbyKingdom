import { Controller } from "../libs/Controller";
import { productRepository } from "../repositories/productRepository";

export class OrderController extends Controller {


  public async createOrder() { // TO DO create repo and methode to send json

    console.log (this.request.body)

    this.response.status(200).json(null);
  }

}
