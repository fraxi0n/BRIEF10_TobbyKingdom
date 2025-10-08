 import { Repository } from "../libs/Repository";

export class productRepository extends Repository {

 
    findAll = async () : Promise<any > => {
    const query = {
      name: "fetch-all-product ",
      text: `
        SELECT * FROM product
        `,
    };

      try {
      const result = await this.pool.query(query);
      
      return result.rows;
    } catch (error) {
      console.log(error)
      return 400;
    }
  }
  
      findAllByAnimals = async () : Promise<any > => {
    const query = {
      name: "fetch-all-product ",
      text: `
        SELECT * FROM product
        `,
    };

      try {
      const result = await this.pool.query(query);
      
      return result.rows;
    } catch (error) {
      console.log(error)
      return 400;
    }
  }

    findTargetById= async (pID:number) : Promise<any > => {
    const query = {
      name: "fetch-product-by-id ",
      text: `
        SELECT * FROM product where id_product = $1
        `,
        values: [pID]
    };

      try {
      const result = await this.pool.query(query);
      
      if(result.rows[0]){
        return result.rows;
      }
      return 404
    } catch (error) {
      console.log(error)
      return 400;
    }
  }





      findRandomTarget= async () : Promise<any > => { //todo
    const query = {
      name: "fetch-product-by-id ",
      text: `
        SELECT * FROM product where id_product = $1
        `,
    };

      try {
      const result = await this.pool.query(query);
      
      if(result.rows[0]){
        return result.rows;
      }
      return 404
    } catch (error) {
      console.log(error)
      return 400;
    }
  }
}