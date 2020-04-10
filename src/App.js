import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';
import BookList from './component/BookList';
import PDFviewer from './component/PDFviewer';
import MobilePDFviewer from './component/MobilePDFviewer';
import AllMemo from './component/AllMemo';

const App = () => {

  return (
      <HashRouter>
        <div id="bigWrapper">
          <Route exact="true" path="/" component={BookList} />
          <Route path="/books/:id" component={PDFviewer} />
          <Route path="/books/:id" component={MobilePDFviewer} />
          <Route exact="true" path="/" component={AllMemo} />
          <Route path="/books/:id" component={AllMemo} />
        </div>
      </HashRouter>
  );
}

export default App;
