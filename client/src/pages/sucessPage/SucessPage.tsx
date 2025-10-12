import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button/Button";

export const SuccesPage = () => {

    const navigate = useNavigate()
    return(
        <div>
            la commande a bien été prise en compte 
            <Button label="retourner a l'acceuil" onClick={()=>navigate("/")}></Button>

        </div>
    );
}