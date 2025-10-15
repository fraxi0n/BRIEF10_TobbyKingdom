import type { Product } from "../../models/Products";
import { Button } from "../button/Button";
import { ImgComp } from "../imgComp/ImgComp";
import "./ProductCard.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";


interface ProductCardProps {
  product: Product
  //   variant: "primary" | "secondary";
}

export const ProductCard = ({ product }: ProductCardProps) => {

  const navigate =useNavigate()

  return <div className="product-card">
    <ImgComp path={product.picturePath} size={300} />
    <p>
      {product.getName()}
    </p>
    <div className="price-btn">
      <Button label="voir produit" onClick={()=>navigate("/produit/"+product.id)} />
      <p>
        {product.price + "€"}
      </p>
    </div>
  </div>
};
