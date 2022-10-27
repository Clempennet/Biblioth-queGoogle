import Button from "../Button/Button"
import Title from "../Title/Title"
import logo from '../../logo.svg';
import Text from "../Text/Text";
import Plane from "../MiniImage/MiniImage";
import './style.css';
import { useState} from "react";
import { useNavigate } from "react-router-dom";



const Card = ({ book, title, content, textButton, modif }) => {
    
    const navigate = useNavigate();
    const [show, setShow]=useState(false);
    const [bookItem, setItem]=useState(false);
    console.log(book)

    return (
        <>
            {
                book.map((item) => {
                    let vignette = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let montant = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(vignette!= undefined && montant != undefined){

                        return (

                            <>
                                <div className="card" onClick={()=>{setShow(true); setItem(item)}}>
                                    <img className="img" src={vignette} alt="logo" style={{ height: '200px' }} />
                                    <br></br>
                                    <Title>{title = montant + "$"}</Title> 
                                    <Button onClick={() => navigate('/intermed:'+ item.id)}><Plane>{modif= 'fa fa-fighter-jet'}</Plane>{textButton = " Plus..."}</Button>
        
           
            
                                    

                                </div>
                            </>
                        )

                    }
                   
                })
            }
        </>

    )
}

export default Card;
