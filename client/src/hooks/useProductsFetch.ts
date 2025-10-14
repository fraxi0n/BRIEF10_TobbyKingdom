import { useEffect, useState } from "react"
import { Product, type ProductData } from "../models/Products"
const API_URL = import.meta.env.VITE_API_URL;



export type SearchOptionType  = {
  animalsCategory? : number, 
  limit? : number  ,
  isRandom ? : true , 
  target? :number 

}


export const useProductsFetch = ( searchOption : SearchOptionType)=> {

  let url = API_URL+'/api/products/'

    if (searchOption.target)
  {
    url += "target/"+searchOption.target
    searchOption.limit = 1 
  } else  if (searchOption.animalsCategory)
  {
    url += "animals-category/"+searchOption.animalsCategory
  }


  const [products , setProducts] = useState<Product[]> ([])

  useEffect(() => {
    const customFetch = async () => {
      try {
        const response = await fetch(url)
        const parseRes = await response.json()
        const typedRes: Product[] = parseRes.map( (element: ProductData) => Product.fromRawData(element) )
        setProducts(typedRes)
        return typedRes
      }
      catch (error) {
        console.log(error
        )
        return []
      };

    }
    customFetch()

  }, [searchOption, url])

  return products
}

