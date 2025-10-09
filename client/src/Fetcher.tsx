import { useEffect, useState } from 'react'


function Fetcher() {
  const [data, setData] = useState <any>()

  useEffect( ()=> {

    const fetcher = async ()=> {

      try{
        const dataFetched = await fetch( "http://localhost:3010/api/products/animals-category/3" ) 

        const parsed = await dataFetched.json()
        setData(parsed)
        // return dataFetched
      }
      catch(error)
      {
        console.log(error)
      }
    }

    fetcher()


  } , [])

  useEffect( () =>console.log(data) , [data])


  return (
    <>
    hello je suis le fetcher

    </>
  )
}

export default Fetcher
