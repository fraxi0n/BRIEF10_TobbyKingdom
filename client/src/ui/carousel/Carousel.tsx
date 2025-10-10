import { useEffect, useState } from 'react';
// import { MovieCard } from './MovieCard';
// import { useFetch, type SearchOptionType } from '../hooks/useApi';
import { useScreenWatch } from '../../hooks/useScreenWatch';
// import type { Product } from '../../models/Products';
import { useProductsFetch } from '../../hooks/useProductsFetch';
import { ProductCard } from '../productCard/ProductCard';


export function Carousel() {

  const [index, setIndex] = useState<number>(0)

  const SW = useScreenWatch()


  const products = useProductsFetch({ animalsCategory: 1 })

  const extProducts = [...products, ...products]

  useEffect(  ( )=> { 


    console.log("hello")
    console.log(extProducts)
  } , [ products]) 


  const setIndexWithWatch = (pIndex: number) => {
    let targetIndex = pIndex

    if (targetIndex > products.length) {
      targetIndex -= products.length
    }
    if (targetIndex < 0) {
      targetIndex += products.length
    }

    setIndex(targetIndex)
  }

  const getCarButton = (incValue: number) => {
    const incFunc = () => { setIndexWithWatch(index + incValue) }

    if (incValue < 0) {
      return <button className=' ' onClick={incFunc} > {incValue === -1 ? '<' : '<<'}   </button>
    }
    else {
      return <button className='' onClick={incFunc} > {incValue === 1 ? '>' : '>>'}   </button>
    }
  }

  return (<>{products.length && <>
    {getCarButton(-1)}
    {extProducts.slice(index, index + SW.carColumn).map((product) => <ProductCard product={product}></ProductCard>)}
    {getCarButton(+1)}
  </> }
  </>
  )
}