import React,{useContext} from 'react';
import { BookContext } from '../contexts/bookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return ( 
        <li onClick={() => dispatch({type:'REMOVE_BOOK',id: book.id})}>
            <div className="card black">
                <div className="card-title white-text">{book.title}</div>
                <div className="card-action white-text">{book.author}</div>
            </div>
        </li>
     );
}
 
export default BookDetails;