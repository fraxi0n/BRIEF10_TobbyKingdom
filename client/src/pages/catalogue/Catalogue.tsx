// page d'accueil / homepage

import { Carousel } from "../../ui/carousel/Carousel";
import { useAnimalsCategoriesFetch } from "../../hooks/useAnimalsCategoriesFetch";
import { ImgComp } from "../../ui/imgComp/ImgComp";


export const Catalogue = () => {

     const categories =  useAnimalsCategoriesFetch()


    return(

        <>
        <h2>Nos Univers</h2>

        {
            categories.map( cat=>  <>
            <ImgComp size={500} path={cat.getpicturePath()}></ImgComp>
            <h3 style={{transform : "translateY(-100px)" , color : "white"}}>Pour nos amis les {cat.getName()}</h3>

            <Carousel searchOption={{animalsCategory : cat.getId()}}/>
            <br></br>
            <br></br>
            </>

            )

        }

        </>
    );
}