import React from 'react'
import { useContext } from 'react/cjs/react.development';
import { BookContext } from '../context/BookContext';

const BookDetails = ({book}) => {
    const {removeBook} =useContext(BookContext)
    return (
        <li onClick={()=> removeBook(book.id)}>
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
        </li>
    )
}
export default BookDetails; 