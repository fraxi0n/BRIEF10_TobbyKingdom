// page du formulaire 

import { useState, type FormEvent } from "react";
import { Button } from "../../ui/button/Button";
import { Link, redirect } from "react-router-dom";

export const FormPage = () => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });



    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        }

        const sendForm = async () => {
            try {

                const request = await fetch("http://localhost:3010/api/order/create", options)

                console.log (request.status)
                // throw redirect("/catalogue")
            }
            catch (error) {
                 console.error(error)
                // throw redirect("/")
            }
        }

        sendForm()

    }

        return (<>
            <h2> Renseignez vos coordonée pour finaliser votre commande </h2>
            <form  onSubmit={e => handleSubmit(e)}>

                <div>
                    <label>Prénom :</label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <label>Nom :</label>
                    <input
                        type="text"
                        name="lastName"
                        required
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <label>Email :</label>
                    <input
                        type="email"
                        name="email"
                        required
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <Button isSubmitType={true} label={"confirmer commande"}></Button>

            </form>


        </>

        );
    }