import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Catalogue } from "./pages/catalogue/Catalogue";
import { CategoryPage } from "./pages/categorie/CategoryPage";
import { ProductDetail } from "./pages/produit/ProductDetail";
import { Panier } from "./pages/panier/Panier";
import { Header } from "./ui/header/Header";
import { Footer } from "./ui/footer/Footer";
import { FormPage } from "./pages/formPage/FormPage";
import "./App.css";

 export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>
      <p>SITE TOBYKINGDOM 
      </p>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/categorie/:categoryId" element={<CategoryPage />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/formulaire" element={<FormPage />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};


