 import { Repository } from "../libs/Repository";

export class animalsCategoryRepository extends Repository {

 
    findAll = async () : Promise<any > => {
    const query = {
      name: "fetch-all-categories ",
      text: `
        SELECT * FROM animals_category
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
      name: "fetch-category-by-id ",
      text: `
        SELECT * FROM animals_category where id_animals_catergory = $1
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







}