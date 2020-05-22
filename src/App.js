import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import BookContextProvider from './contexts/bookContext';
import Navbar from './components/Navbar';
import BookList from './components/bookList';
import BookForm from './components/BookForm';
import about from './components/about';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList/>
        <BookForm/>
        <BrowserRouter>
          <Switch>
            <Route path="/" to={App}></Route>
            <Route path="/about" to={about}></Route>
          </Switch>
        </BrowserRouter>
      </BookContextProvider>
    </div>
  );
}

export default App;
