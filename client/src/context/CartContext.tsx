import { createContext, useContext, useState, type ReactNode } from "react";
//import { useLocalStorage } from "../hooks/useLocalStorage"; // si on veut garder la persistance !

export type Product = {
  id: number;
  name: string;
  price: number;
  picturePath: string;
  description: string;
  breedName?: string| null
  stock: number;
  categoryId: number;
};

export type CartItem = Product & {
  quantity: number;
};

// 3. Ce que notre Contexte va fournir aux composants
export interface CartContextValues {
  cartItems: CartItem[];
  cartQuantity: number;
  getItemQuantity: (id: number) => number;
  addToCart: (produit: Product) => void; // on ne doit pas que pousser l'ID du produit ou que le nom du produit on pousse le produit au complet!
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

// --- Création du Contexte ---
const CartContext = createContext<CartContextValues | null>(null);

// --- Provider (balise qui englobe des composants enfants pour qu'ils puissent consommer le context) ---
export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantity = cartItems.reduce((quantity : number, item : CartItem) => item.quantity + quantity, 0);

  function getItemQuantity(id: number) {
    return cartItems.find((item : CartItem )=> item.id === id)?.quantity || 0;
  }
  

  function addToCart(article: Product) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === article.id) == null) {
        // si on veut ajouter un produit qui n'est pas dans le panier on l'ajoute avec une quantité de +1
        return [...currItems, { ...article, quantity: 1 }];
      } else {
        // si le produit est déjà dans le panier on l'incrémente juste de +1 encore
        return currItems.map(item => {
          if (item.id === article.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

 
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      return currItems.map(item => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 }; //incrémente
        return item;
      });
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 }; //décrémente
          return item;
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => currItems.filter(item => item.id !== id));
  }

  
  const contextValue: CartContextValues = {
    cartItems,
    cartQuantity,
    getItemQuantity,
    addToCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// --- Hook Custom (petit hook qui permet d'appeler le context dans les composants où veut interagir avec lui)---
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
        "L'élément qui consomme CartContext doit se trouver dans CartContext"
    );
  }

  return context;
};
