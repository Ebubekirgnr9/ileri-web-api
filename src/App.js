import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import Navbar from './components/navbar';
import Header from './components/header';




const App = () => {

  const [searchField, setSearchField] = useState('');
  const [articles, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([articles]);

  console.log('articles', articles);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=a20645b273a2456894594602505a87db')
      .then(res => res.json()) 
      .then(json => setProducts(json.articles))
  }, [])

  useEffect(() => {
    const newFilteredProducts = articles.filter((data) => {
      return data.title.toLowerCase().includes(searchField);
    })
    setFilteredProducts(newFilteredProducts);
  }, [articles, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>

      <Navbar/>
      <Header/>
      <SearchBox onChangeHandler={onSearchChange}placeholder='Haberleri arayınız' className={'search-box'}/>
      <CardList filteredProducts={filteredProducts} />
      </div>
      
  );

}

export default App