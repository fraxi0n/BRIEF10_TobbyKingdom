import { Button } from "../button/Button";
import "./Header.css";


import TobbyPlaceHolder from "../../../public/pictures/TobbyPlaceHolder.jpg";
import { useAnimalsCategoriesFetch } from "../../hooks/useAnimalsCategoriesFetch";
import { Link } from "react-router-dom";


export const Header = () => {


    const animalCategories = useAnimalsCategoriesFetch()



    return (<div className="header">
        <img src={TobbyPlaceHolder} alt="logo" />
        <h1>TobbyKingDom</h1>
        <nav>
            <ul>
                {
                    animalCategories.map((cat, key) => {
                        return <Link to={"/categorie/" + cat.getId()} key={key}>
                            <li><Button label={cat.getName()} /></li>
                        </Link>
                    })
                }
            </ul>
        </nav>
        <Button label="IconShop" />


    </div>
    );
};
