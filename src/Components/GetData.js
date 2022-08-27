import React from 'react'
import {useEffect, useState} from 'react'
import RenderData from './RenderData'
import NavScroll from './NavScroll'
import Footer from './Footer'


function GetData() {
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
    <div>
      <h1 className='title_name'>FANTASIA</h1>
      <h4 className="title_description">The Board Game Blog</h4>
      <NavScroll />

      


    
      



      


  
      <Footer />



      


      <RenderData entries={entries} assets={assets}/>

    </div>
  )
}

export default GetData