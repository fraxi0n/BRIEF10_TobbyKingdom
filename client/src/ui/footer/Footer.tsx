import "./Footer.css";

import TobbyPlaceHorlder from "../../../public/pictures/TobbyPlaceHolder.jpg";

export const Footer = () => {
    return (
        <div className="footer">
            <img src={TobbyPlaceHorlder} alt="logo" />
            <p className="titreFooter">TobbyKingDom</p>
            <p>10 rue des Lamas Chinois, 20600 BASTIA</p>
            <p>Tél : 04 76 34 20 99</p>
        </div>
    );
};
