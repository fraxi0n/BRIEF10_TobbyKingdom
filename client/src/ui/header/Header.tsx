import { Button } from "../button/Button";
import "./Header.css";
import "../../App.css";


import { useAnimalsCategoriesFetch } from "../../hooks/useAnimalsCategoriesFetch";
import { Link, useNavigate } from "react-router-dom";
import { useScreenWatch } from "../../hooks/useScreenWatch";
import { useState } from "react";


export const Header = () => {


    const animalCategories = useAnimalsCategoriesFetch()

    const [isDropDownOpen, setDropdownOpen] = useState(false)

    const navigate = useNavigate()

    const SW = useScreenWatch()


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
                        <Button classProps={isDropDownOpen ? " dd-active" : ""} label={"Categories"} 
                        onClick={() => setDropdownOpen((prev) => !prev)}></Button>
                        <div className="dropdown-content">
                            {
                                isDropDownOpen && animalCategories.map((cat, key) => {
                                    return <div key={key} className="dropdown-button">

                                        <Button label={cat.getName()} onClick={() => {
                                            setDropdownOpen(false);
                                            navigate("/categorie/" + cat.getId())
                                        }} />
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
                <Button label="Panier" />
            </div>
        </nav>


    </div>
    );
};
