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

      findNew= async () : Promise<any > => {
    const query = {
      name: "fetch-all-product ",
      text: `
         SELECT * FROM product order by creation_date desc limit 5;
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
  
      findAllByRaceID = async (pID : number) : Promise<any > => {
    const query = {
      name: "fetch-all-product with race",
      text: `
        select * from animals_category 
join racer on animals_category.id_animals_category = racer.id_animals_category 
join product on racer.id_product=product.id_product
where animals_category.id_animals_category = $1
        `,
        values: [pID]
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