import React from 'react'
import {useEffect, useState} from 'react'
import RenderData from './RenderData'
import { Button } from 'react-bootstrap';
function GetData() {
  const [entries, setEntries] = useState(false)
  const [assets, setAssets] = useState(false)

  useEffect(()=> {
    loadEntries()
    loadAssets()
  },[])

  async function loadAssets() {
    const url = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/assets?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    const response = await fetch(url)
    const result = await response.json()
    console.log('Assets:',result)
    setAssets(result)
}


  async function loadEntries(){
    const url = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&content_type=${process.env.REACT_APP_CONTENTTYPE}`
    const response =await fetch(url)
    const result= await response.json()
   console.log(result.items)
    setEntries(result.items)

  }
 
 if(!entries || !assets){
    return <div>Data is Loading...</div>
  }
  
/*   const posts = entries.filter((element)=> element.sys.contentType.sys.id.includes("boardGames") )  */
  
  return (
    <div>
      <h1>DATA FETCHED</h1>


    
      


      <RenderData entries={entries}/>




      

  



    </div>
  )
}

export default GetData