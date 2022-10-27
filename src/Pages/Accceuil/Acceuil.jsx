import { useNavigate } from "react-router-dom";
import Image from "../../components/Image/Image";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import "./accueil.css"

const Welcome = (children, title) => {
    const navigate = useNavigate();

    return (
        <div className="div">
            <Navbar> </Navbar>

            <div className="overlay">
            <div className="overlay-inner">
               <div className="titre">
               <Title >{title = "À quoi sert le site Livr'Air ? "}</Title>
                </div>
                <br></br>
                <Text>{children = 'Ce site internet propose un moteur de recherche spécialement pour les livres étant dans la bibliothèque "Google Livre".'}</Text>
                <Text>{children = 'Dans la page "Livre", Vous trouverez une barre de recherche. '}</Text>
                <Text>{children = "Si vous ne savez pas trop ce que vous cherchez, tapez simplement un de vos centres d'intérêts."}</Text>
                <Text>{children = "Si vous savez ce que vous cherchez, tapez simplement le nom du livre. "}</Text>
                <Text>{children = "N'oubliez pas d'appuyer sur la touche 'Entrer' de votre clavier ! "}</Text>

            </div>
            </div>
        </div>

    );
}

export default Welcome;