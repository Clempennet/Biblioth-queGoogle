import Button from "../Button/Button"
import logo from '../../logo.svg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Image from '../Image/Image';
import MiniImage from "../MiniImage/MiniImage";
import React from "react";
import './Modal.css'
import { Plane } from "../MiniImage/MiniImage.stories";

export const Modal = ({ show,item, textButton1,className }) => {
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <div className="inner-box">

                    <Image className='img' logo = {item.imageLinks.smallThumbnail}></Image>
                    <div className="info">
                        <h1>{item.title}</h1>
                        <h2>{item.authors}</h2> <br></br>
                        <h3>{item.publisher}<span>  {item.publishedDate}</span></h3><br></br>
                        <a href={item.previewLink}> <Button><Plane  modif= 'fa fa-shopping-cart'></Plane>{textButton1 = " Acheter"}</Button></a>
                    </div>
                    </div>
                    <br></br>
                    <h4 className="description">{item.description}</h4>
                </div>

            </div>
        </>

    )
}

export default Modal;