import React, {useState} from 'react';
import './style.css';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import bg1 from '../Components/bg1.gif'
const Main = () => {
  const [booksData, setBooksData] = useState([]);

  const handleSearch = (data) => {
    setBooksData(data);
  };
  return (
    <>
    <div className="main-container">
    <div className="header">
        <div className="row1">
            <h1>"A room without books is like <br /> a body wihout soul"</h1>
        </div>
        <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
            <SearchBar onSearch={handleSearch} />
            </div>
            <img src={bg1} alt=""/>
        </div>
    </div>
        <div className='card-container'>
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <hr />
    </div>
    </>
  )
}

export default Main