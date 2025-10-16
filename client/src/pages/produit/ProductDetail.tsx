import { useParams } from 'react-router-dom';
import { useProductsFetch } from '../../hooks/useProductsFetch';
import { Product } from '../../models/Products';
import { ImgComp } from '../../ui/imgComp/ImgComp';
import './productDetail.css';
import { useMemo } from 'react';


export const ProductDetail = () => {
  
  const {id} = useParams()
  const searchOption = useMemo(() =>({ target: parseInt(id??"0")}),[id])
  const products: Product[] = useProductsFetch(searchOption);
  const product = products[0];
  
  if (!product) {
    return <div className="loading-container">Erreur lors du chargement du produit...</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-container">
          <ImgComp path={product.picturePath} size={300}/>
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>

          <p className="product-price">{product.price.toFixed(2)} €</p>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <button className="add-to-cart-button" disabled={product.stock === 0}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};
