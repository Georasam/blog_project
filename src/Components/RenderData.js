
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import Col from 'react-bootstrap/Col';



function RenderData({data, entries, assets}) {
  const { setAuth, persist} = useAuth();
  return ( 
    <div className="body-data">

       <div className="row ">{data.map((entry,index)=>{
         /* const imageUrl = _getAssetUrl(entry.fields.image.sys.id) */
         console.log(entry.imgUrl)
          return(
          <Col className="main-content" md={4} key={index} >
              <div className="card main-back" style={{height: "100%"}}>
                <div className="card-body">
                  <h5 className="card-title">{entry.title}</h5>
                  <img className="image_size" src={entry.imgUrl} alt="not loading"></img>
                  <p className="card-text">{entry.rich_text}</p>
                  <p className="card-Author">Author(s): {entry.author}</p>
                  <p className="card-publisher"> Publisher: {entry.publisher}</p>
                 {/*  <Link to={`/blog_project/${entry.fields.title.toLowerCase()}`}>
                  <Button  variant='success' className="btn btn-primary">Read more</Button>
                  </Link> */}
                  <Link  disabled={!setAuth ? true : false} to={`/blog_project/edit/${entry.id}`}>
                  <button  variant='success' className="btn btn-primary">edit</button>
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