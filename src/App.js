import './App.css';
import {useEffect, useState} from 'react'
import RenderData from './Components/RenderData';
import {Routes, Route} from "react-router-dom"
import GameDetails from './Components/GameDetails';
import NavScroll from './Components/NavScroll';


function App() {
  const [entries, setEntries] = useState() //rich text
  const [assets, setAssets] = useState() //images

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

  if(!entries || !assets){
     return <div>Data is Loading...</div>
   }

  return (
    <div className="App">
      <h1 className='title_name'>FANTASIA</h1>
      <h4 className="title_description">The Board Game Blog</h4>
      <NavScroll />
      <Routes>
        <Route path={"fantasiaStartpage"} element={<RenderData entries={entries} assets={assets}/>}></Route>
        <Route path={"fantasiaStartpage/:SingleGameTitle"} element={<GameDetails  name=""/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
