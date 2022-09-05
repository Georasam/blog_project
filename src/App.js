import './App.css';

import {useEffect, useState} from 'react'
import RenderData from './Components/RenderData';
import {Routes, Route} from "react-router-dom";
import Footer from './Components/Footer';
import GameDetails from './Components/GameDetails';
import NavScroll from './Components/NavScroll';
import Search from './Components/Search';


function App() {
  const [entries, setEntries] = useState() //rich text
  const [assets, setAssets] = useState() //images
  const [searchQuery, setSearchQuery]=useState() //searchquery
  const [searchResults,setSearchResults] = useState()//searchresults

  async function loadData() {
    const url = `https://cdn.contentful.com//spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&content_type=${process.env.REACT_APP_CONTENTTYPE}&metadata.tags.sys.id[in]=boardGames`
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
    setEntries(result.items) //rich test
    setAssets(result.includes.Asset) //images
  }
  console.log("Entries", entries)
  console.log("Assets", assets)

  useEffect(()=> {
    loadData()
  },[])

  
   async function search() {
    const url = `https://cdn.contentful.com//spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&query=${searchQuery}`
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
    setSearchResults(result.items) //rich test
    
  }
  

  if(!entries || !assets ){
    return <div>Data is Loading...</div>
  }

  
  return (
    <div className="App">
      <h1 className='title_name'>FANTASIA</h1>
      <h4 className="title_description">The Board Game Blog</h4>
      <NavScroll searchQuery={searchQuery} setSearchQuery={setSearchQuery} search={search}/>
      <Routes>
        <Route path="/blog_project"  element={<RenderData entries={entries} assets={assets}/>}></Route>
        <Route path="/blog_project/:singleGameTitle" element={<GameDetails assets={assets} entries={entries} name=""/>}></Route>
        <Route exact path="/blog_project/search" element={<Search search={search} entries={entries} searchQuery={searchQuery} searchResults={searchResults} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
