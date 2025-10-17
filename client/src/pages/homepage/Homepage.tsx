// page d'accueil / homepage

import { Link } from "react-router-dom";
import { useAnimalsCategoriesFetch } from "../../hooks/useAnimalsCategoriesFetch";
import { Carousel } from "../../ui/carousel/Carousel";
import { ImgComp } from "../../ui/imgComp/ImgComp";

export const Homepage = () => {
    const categories = useAnimalsCategoriesFetch()

    return (
        <>
            <Link to={"/catalogue"}>

                <div >
                    <h2>  Découvrez nos univers </h2>
                    {
                        categories.map(cat => <>
                            <ImgComp size={500} path={cat.getpicturePath()}></ImgComp>
                        </>
                        )

                    }
                </div>
            </Link>
            <Carousel searchOption={{ animalsCategory: 1 }} />
        </>
    );
}