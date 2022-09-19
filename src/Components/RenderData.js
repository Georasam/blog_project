
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function RenderData({data, entries, assets}) {
    //console.log(entries )
    //console.log(assets)
console.log(data)
  /*   function _getAssetUrl(assetId) { //underline Function (_getAssetUrl) indicates a helper function. In this case matching Image with Content
      const found = assets.find(element => element.sys.id === assetId)
      //console.log(assetId, found.fields.file.url)
      return (
        found.fields.file.url
      )
    } */

  return ( 
    <div className="body-data">

       <div className="row ">{data.map((entry,index)=>{
         /* const imageUrl = _getAssetUrl(entry.fields.image.sys.id) */
         console.log(entry)
          return(
          <Col className="main-content" md={4} key={index} >
              <div className="card main-back" style={{height: "100%"}}>
                <div className="card-body">
                  <h5 className="card-title">{entry.title}</h5>
                  <img className="image_size" src={entry.imageUrl} alt="not loading"></img>
                  <p className="card-text">{entry.richtext}</p>
                  <p className="card-Author">Author(s): {entry.author}</p>
                  <p className="card-publisher"> Publisher: {entry.publisher}</p>
                 {/*  <Link to={`/blog_project/${entry.fields.title.toLowerCase()}`}>
                  <Button  variant='success' className="btn btn-primary">Read more</Button>
                  </Link> */}
                  <Link to={`/blog_project/edit/${entry.id}`}>
                  <Button  variant='success' className="btn btn-primary">edit</Button>
                  </Link>
                </div>
              </div>
            </Col>
          )
          }) }
        </div> 
        </div>
      
    

  )
}

export default RenderData

//Entries Id: .fields.image.sys.id
//Assets Id: .sys.id