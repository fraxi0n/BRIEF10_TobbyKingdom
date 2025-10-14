import { useEffect, useState } from "react"
import { AnimalCategory, type AnimalCategoryData } from "../models/AnimalCategory"

const API_URL = import.meta.env.VITE_API_URL;



export const useAnimalsCategoriesFetch = ()=> {

  const url = API_URL+'/api/animals-categories/'

  const [animalsCategories , setAnimalsCategories] = useState<AnimalCategory[]> ([])

  useEffect(() => {
    const customFetch = async () => {
      try {
        const response = await fetch(url)
        const parseRes = await response.json()
        const typedRes: AnimalCategory[] = parseRes.map( (element: AnimalCategoryData) => AnimalCategory.fromRawData(element) )
        setAnimalsCategories(typedRes)
        return typedRes
      }
      catch (error) {
        console.log(error
        )
        return []
      };

    }
    customFetch()

  }, [url])

  return animalsCategories
}

