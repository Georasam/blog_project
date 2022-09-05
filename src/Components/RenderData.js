
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';



function RenderData({entries, assets}) {
    //console.log(entries )
    //console.log(assets)

    function _getAssetUrl(assetId) { //underline Function (_getAssetUrl) indicates a helper function. In this case matching Image with Content
      const found = assets.find(element => element.sys.id === assetId)
      //console.log(assetId, found.fields.file.url)
      return (
        found.fields.file.url
      )
    }

  return ( 
    <div className="body-data">
       <div className="row ">{entries.map((entry,index)=>{
         const imageUrl = _getAssetUrl(entry.fields.image.sys.id)
          return(
          <Col className="main-content" md={4} key={index} >
              <div className="card main-back" style={{height: "100%"}}>
                <div className="card-body">
                  <h5 className="card-title">{entry.fields.title}</h5>
                  <img className="image_size" src={imageUrl} alt="not loading"></img>
                  <p className="card-text">{entry.fields.richtext}</p>
                  <p className="card-Author">Author(s): {entry.fields.author}</p>
                  <p className="card-publisher"> Publisher: {entry.fields.publisher}</p>
                  <Link to={`/${entry.fields.title.toLowerCase()}`}>
                  <Button  variant='success' className="btn btn-primary">Read more</Button>
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