import { Button } from "../button/Button";
import "./Header.css";


import TobbyPlaceHolder from "../../../public/pictures/TobbyPlaceHolder.jpg";


export const Header = () => {
    return (
        <div className="header">
            <img src={TobbyPlaceHolder} alt="logo" />

           <nav>
            <ul>
                <li><Button label="Chien"/></li>
                <li><Button label="Chat"/></li>
                <li><Button label="Poule"/></li>
            </ul>
           </nav>
           <Button label="IconShop"/>
            

        </div>
    );
};
