import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export const Intermed = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([])
    const url = window.location.pathname.substr(10);

    useEffect(() => {
        const getBooks = async () => {
            setBookData(await getDonnees())
        }

        getBooks()
    }, [search])

    async function getDonnees() {
        const reponse = await fetch('https://www.googleapis.com/books/v1/volumes/' + url)
        const { volumeInfo } = await reponse.json()
        console.log(volumeInfo)

        return volumeInfo
    }


    return (

        
        <>
        {bookData.title &&
            <div>
                <Navbar> </Navbar>
                <Modal item={bookData}></Modal>
            </div>
        }
        </>
        
    )


}

