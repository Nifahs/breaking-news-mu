import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';
import Bar from './components/Bar/Bar';


function App() {

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7c0121f60fe74c2481d891c1c937b558')
    .then(res=> res.json())
    .then(data=> setArticles(data.articles))
  }, [])
  return (
    <div>
      <Bar></Bar>
      <h1>total articles:{articles.length}</h1>
      {/* <Button color="primary">Hello World</Button> */}
      {
        articles.map(article=> <News articles ={article}></News>)
      }
    </div>
  );
}

export default App;
