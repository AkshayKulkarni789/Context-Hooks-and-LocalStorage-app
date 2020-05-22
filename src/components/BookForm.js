import React,{useContext, useState} from 'react';
import { BookContext } from '../contexts/bookContext';

const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {
            title,author
        }})
        setTitle('')
        setAuthor('')
    }
    return ( 
        <div className="container center">
        <form onSubmit={submitHandler}>
            <input required type="text" placeholder="Book Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input required type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <button className="btn black" type="submit">Add</button>
        </form>
        </div>
     );
}
 
export default BookForm;