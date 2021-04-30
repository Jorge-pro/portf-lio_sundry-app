import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import PosterBar from './PosterBar/PosterBar';
import Footer from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <SearchBar />
    <PosterBar/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

