import React,{useContext} from 'react';
import BookDetails from './bookDetails'
import { BookContext } from '../contexts/bookContext'

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length ? ( 
        <div className="center container book-list">
            <ul>
                {books.map(book => {
                    return(<BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
     ) : (
        <div className="center card grey">
            <h3 className="card-title">You have no books to go through!</h3>
        </div>
     );
}
 
export default BookList;