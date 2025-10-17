// page de catégorie : on affiche 1 univers genre chat
// on a nos 3filtres et les images de nos produits

import { useAnimalsCategoriesFetch } from "../../hooks/useAnimalsCategoriesFetch";
import {
  useProductsFetch,
  type SearchOptionType,
} from "../../hooks/useProductsFetch";
import { useNavigate, useParams } from "react-router-dom";
import { ImgComp } from "../../ui/imgComp/ImgComp";
import { useMemo, useState } from "react";
import { ProductCard } from "../../ui/productCard/ProductCard";
import "./categoryPage.css";
import { Button } from "../../ui/button/Button";

// export type Products = {
//     id_product : number,
//     name : string,
//     price : number,
//     picture_path : string,
//     description : string,
//     breed_name : string,
//     stock : number,
//     id_category_product : number,
// }

export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const navigate = useNavigate();

  const animalCategories = useAnimalsCategoriesFetch();

  let FetcherCategoryPage;

  let categoryName;

  if (categoryId) {
    const paramHook: SearchOptionType = useMemo(
      () => ({ animalsCategory: parseInt(categoryId) }),
      [categoryId]
    );
    // {animalsCategory: parseInt(categoryId)};

    FetcherCategoryPage = useProductsFetch(paramHook);

    categoryName = animalCategories.find(
      (category) => category.id_animals_category === parseInt(categoryId)
    );
  } else {
    // console.log("HeloooooooOOO" );
    //useNavigate => redirection vers une page
  }

  // ___ product_category_btn __________

  const [familyFilter, setFamilyFilter] = useState<number | null> (null)

  const handleFilter = (familyId: number) => {
    setFamilyFilter(familyId);
  };

  // ___ range slider__
  const [slider, setSlider] = useState({
    max: 300,
    min: 0,
    value: 300,  //pour que le slider soit par default à 1000 lorsquon arrive sur la page
  });

  const onSlide = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlider({
      ...slider,
      value: parseInt(event.target.value),
    });
  };

  const filterProducts = FetcherCategoryPage
  ?.filter((produit) => produit.price <= slider.value )
  ?.filter((produit) => !familyFilter || produit.categoryId === familyFilter);


  return (
    <div>
      <div>
        {/* ______________banner______________  */}
        {/* {FetcherCategoryPage.name} */}
        {/* <img src="public/catPictures/catBanner.jpg" alt="category banner" /> */}
        {categoryName && (
          <ImgComp path={categoryName.getpicturePath()} size={300} />
        )}
        <h2>Pour nos amis les {categoryName?.name}</h2>
      </div>

      {/* ______________filter______________  */}
      {/* <p>{product_category.id_category_product}</p> id_category_product */}

      {/* => 3 buttons/liens  
                +  input de type RangeSlider */}

      {/* https://stackoverflow.com/questions/62725470/create-range-slider-in-react-js */}
      <div className="family_filter_container">



{/* method button 1 */}
        {/* <Button label="voir liste des produits" onClick={()=>navigate("/produit/"+product.id)} /> */}
        {/* <p>Animaux</p> */}
        {/* <button className="family_btn" onClick={() => handleFilter(3)}>Animaux</button> */}
        {/* <p>Nourriture</p> */}
        {/* <button className="family_btn" onClick={() => handleFilter(1)}>Nourriture</button> */}
        {/* <p>Accessoires</p> */}
        {/* <button className="family_btn" onClick={() => handleFilter(2)}>Accessoires</button> */}


{/* method button Composant */}
        <Button 
        label={"Animaux"} 
        onClick={() => handleFilter(3)} 
        classProps=" family_btn"
        />
        <Button label={"Nourriture"} 
        onClick={() => handleFilter(1)} 
        classProps=" family_btn"
        />
        <Button label={"Accessoires"} 
        onClick={() => handleFilter(2)}
        classProps=" family_btn"/>

        <div className="price-slider">
          <p>Prix</p>
          <p>{slider.value}</p>

          <div className="range-slider">
            
            <p>Chien de la Casse 0€</p>
            <input
              type="range"
              min={slider.min}
              max={slider.max}
              value={slider.value}
              onChange={(event) => onSlide(event)}
              className="slider"
              id="myRange"
            ></input>
            <p>300€ Poule de Luxe</p>
            
          </div>
        </div>
      </div>

      {/* ______________products list______________  */}
      <div>
        {/* {FetcherCategoryPage?.map((produit) => {
          return <ProductCard product={produit} />;
        })} 
         pour filtrer remplacé par :*/}

        {filterProducts?.map((produit) => {
          return <ProductCard product={produit} />;
        })}

      </div>
    </div>
  );
};

//voir le fetch detailMovies

// const FetcherDetailsMovies = useFetchDetails<detailsMovies>(id);
// => remplacer id par 1 chiffre temporairement
// const products = useProductsFetch({ animalsCategory: 1 })
// const products = useProductsFetch({ animalsCategory: { animalCategoryID })

// hook useParams

// const animalCategoryID  = hook useParam()

//return product
