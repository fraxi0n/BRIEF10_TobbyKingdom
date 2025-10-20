import { Button } from "../button/Button";
import "./Header.css";
import "../../App.css";

import { useCartContext } from "../../context/CartContext";
import { useAnimalsCategoriesFetch } from "../../hooks/useAnimalsCategoriesFetch";
import { Link, useNavigate } from "react-router-dom";
import { useScreenWatch } from "../../hooks/useScreenWatch";
import {  useContext, useState } from "react";


export const Header = () => {
    const { cartQuantity } = useCartContext();

    const animalCategories = useAnimalsCategoriesFetch()

    const [isDropDownOpen, setDropdownOpen] = useState(false)

    const navigate =useNavigate()

    const SW = useScreenWatch()
    const labelPanier = cartQuantity > 0 ? `Panier (${cartQuantity})` : "Panier";

    return (<div className="header">
        <Link to={"/"} >
            <div className="logo-title">
                <img src={"/pictures/kingTobby.png"} alt="logo" />
                <h1>Tobby Kingdom</h1>
            </div>
        </Link>
        <nav>
            <div className="nav-cat">

                {
                    SW.isMobile ? <div className="dropdown">
                        <Button classProps={isDropDownOpen?" dd-active" :"" } label={"Categories"} onClick={() => setDropdownOpen((prev) => !prev)}></Button>
                        <div className="dropdown-content">
                        {
                            isDropDownOpen && animalCategories.map((cat, key) => {
                                return  <div key={key} className="dropdown-button">

                                    <Button label={cat.getName()} onClick={()=>navigate("/categorie/" + cat.getId())} />
                                </div>
                            
                            })
                        }
                        </div>
                    </div>

                        : <>
                            {
                                animalCategories.map((cat, key) => {
                                    return <Link to={"/categorie/" + cat.getId()} key={key}>
                                        <Button label={cat.getName()} />
                                    </Link>
                                })
                            }
                        </>
                }
                <> </>
                <Button label={labelPanier} onClick={() => navigate("/panier")} />
            </div>
        </nav>


    </div>
    );
};
