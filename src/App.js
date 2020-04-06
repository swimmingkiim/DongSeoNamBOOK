import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';
import BookList from './component/BookList';
import PDFviewer from './component/PDFviewer';
import AllMemo from './component/AllMemo';

const App = () => {

  const HomeImg = require("./img/book.png");

  return (
      <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
        <div id="bigWrapper">
          <Route exact="true" path="/" component={BookList} />
          <Route path="/book-name" component={PDFviewer} />
          <Route exact="true" path="/" component={AllMemo} />
          <Route path="/book-name" component={AllMemo} />
          <a  className="goToHome" href="/DongSeoNamBOOK">
            <img src={HomeImg} alt="HOME" />
          </a>
        </div>
      </HashRouter>
  );
}

export default App;
