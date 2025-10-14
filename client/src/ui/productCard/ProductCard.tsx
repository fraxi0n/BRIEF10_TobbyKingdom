import type { Product } from "../../models/Products";
import { ImgComp } from "../imgComp/ImgComp";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product
//   variant: "primary" | "secondary";
}

export const ProductCard = ({product}: ProductCardProps) => {
  return <div>
    <ImgComp path={product.picturePath} size={300}/>
   {product.getName()}
  {product.price}
  </div>
};
