import Button from "../Button/Button"
import Title from "../Title/Title"
import logo from '../../logo.svg';
import './Navbar.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Image from '../Image/Image';
import Plane from "../MiniImage/MiniImage";
import { useNavigate } from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


const Navbar = ({ title, textButton1, textButton2,modif ,textButton3 }) => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
            
            <div className="image">
            <Image>{logo}</Image>
            </div>
            <div className="titre">
            <Title>{title = "LIVR'AIR"}</Title>

            </div>
           
            

            <div className="btn">
            <Button onClick={() => navigate('/')}><Plane modif= 'fa fa-bookmark'></Plane>{textButton1 = " Accueil"}</Button>
        
           
            <Button onClick={() => navigate('/about/2')}><Plane modif= "fa fa-book"></Plane>{textButton2=" Livre"}</Button>
           
            </div>
            
          
            
        </nav>
    );
}

export default Navbar;
