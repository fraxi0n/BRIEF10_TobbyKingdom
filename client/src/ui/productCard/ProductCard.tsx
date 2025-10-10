import type { Product } from "../../models/Products";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product
//   variant: "primary" | "secondary";
}

export const ProductCard = ({product}: ProductCardProps) => {
  return <div>
   {product.getName()}
  {product.price}
  </div>
};
