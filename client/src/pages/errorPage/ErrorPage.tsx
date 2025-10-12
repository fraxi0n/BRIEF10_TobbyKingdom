import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button/Button";

export const ErrorPage = () => {

    const navigate = useNavigate()
    return(
        <div>
            Une erreur c'est produite <br/>
            <Button label="retourner a l'acceuil" onClick={()=>navigate("/")}></Button>

        </div>
    );
}