import { useEffect, useState } from 'react'
import { Product, type ProductData } from './models/Products'


function Fetcher() {
  const [data, setData] = useState <Product[]>([])

  useEffect( ()=> {

    const fetcher = async ()=> {

      try{

        // pour aller voir l'url aller dans le dossier  /server/routes 
        // ça commencera toujours par "http://localhost:3010/api/
        const dataFetched = await fetch( "http://localhost:3010/api/products/animals-category/3" ) 

        const parsedArray = await dataFetched.json()

        const resultArray = parsedArray.map( (element :ProductData) => { 
        return  Product.fromRawData(element)

        });

        setData(resultArray)
        // return dataFetched
      }
      catch(error)
      {
        console.log(error)
      }
    }

    fetcher()


  } , [])

  useEffect( () =>{console.log(data) 

    console.log(
      data[0]?.getName()
    )

  }, [data])


  return (
    <>
    hello je suis le fetcher

    </>
  )
}

export default Fetcher
