// page de catégorie : on affiche 1 univers genre chat 
// on a nos 3filtres et les images de nos produits


import { useAnimalsCategoriesFetch } from "../../hooks/useAnimalsCategoriesFetch";
import { useProductsFetch, type SearchOptionType } from "../../hooks/useProductsFetch";
import { useNavigate, useParams } from "react-router-dom";



export type Products = {
    id_product : number,
    name : string,
    price : number,
    picture_path : string,
    description : string,
    breed_name : string,
    stock : number,
    id_category_product : number,
}


export const CategoryPage = () => {
    const { categoryId } = useParams<{categoryId: string  }>();
    const navigate = useNavigate();

    const animalCategories = useAnimalsCategoriesFetch()


let FetcherCategoryPage;

let categoryName;

    if (categoryId) {
        const paramHook: SearchOptionType = {animalsCategory: parseInt(categoryId)};

         FetcherCategoryPage = useProductsFetch(paramHook);

         categoryName = animalCategories.find(
        (category) => category.id_animals_category === parseInt(categoryId)
    );
        
    } else { 
        // console.log("HeloooooooOOO" );
        
        //useNavigate => redirection vers une page

    }

    

    return(
        <div>
            
            <h2>Pour nos amis les {categoryName?.name}</h2>
            {/* {FetcherCategoryPage.name} */}
            <img src="public/catPictures/catBanner.jpg" alt="category banner" />
          
            {FetcherCategoryPage?.map((produit) => {
                return(
                    <div>
                <p>{produit.picturePath}</p> {/* picture_path */}
                <p>{produit.name}</p> {/* name */}
                <p>{produit.price}</p> {/* price */}
            </div>
                )
            })
            
            }
        </div>
        
    );
}


//voir le fetch detailMovies

// const FetcherDetailsMovies = useFetchDetails<detailsMovies>(id);   
// => remplacer id par 1 chiffre temporairement
// const products = useProductsFetch({ animalsCategory: 1 })
// const products = useProductsFetch({ animalsCategory: { animalCategoryID })

// hook useParams

// const animalCategoryID  = hook useParam() 



//return product