import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import BookList from './component/BookList';
import PDFviewer from './component/PDFviewer';
import AllMemo from './component/AllMemo';

const App = () => {

  const HomeImg = require("./img/book.png");

  return (
      <div id="bigWrapper">
        <BrowserRouter>
          <Switch>
            <Route exact="true" path="/DongSeoNamBOOK" component={BookList} />
            <Route path="/DongSeoNamBOOK/books/book-name=:bookName/" component={PDFviewer} />
          </Switch>
          <Switch>
            <Route exact="true" path="/DongSeoNamBOOK" component={AllMemo} />
            <Route path="/DongSeoNamBOOK/books/book-name=:bookName/" component={AllMemo} />
          </Switch>
        </BrowserRouter>
        <a  className="goToHome" href="/DongSeoNamBOOK">
          <img src={HomeImg} alt="HOME" />
        </a>
      </div>
  );
}

export default App;
