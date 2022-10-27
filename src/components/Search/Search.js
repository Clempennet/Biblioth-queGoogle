import './Search.css';
import { useEffect, useState } from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import { Link } from 'react-router-dom';
import React from "react";
import axios from 'axios';
import './Search.css';
import Card from '../Card/Card';


const Search = () => {
  const [search, setSearch] = useState("");

  const [bookData, setBookData] = useState([])

  const searchbook = (evt) => {
    if (evt.key === 'Enter') {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDFp7HaaHnAKCCPCEdlPHIb--hlj5t8t1s'+'&maxResults=40')
        .then(res => setBookData(res.data.items))
        .catch(err => console.log(err))
    }
  }
  console.log(searchbook)

    return (
      <>
  
  
        <div className='search'>
          <input className='search-header' text='text' placeholder='Enter your book name'
            value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchbook} />
          
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='contenair'>
  
          {
            <Card  book={bookData}></Card>
          }
  
        </div>
  
      </>
    )

  

}




export default Search;
