
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import useAuth from "../hooks/useAuth";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";



function RenderData({data}) {
  const { auth, persist} = useAuth();
  console.log(auth,persist)
  return ( 
    <div className="body-data">

       <div className="row ">{data.map((entry,index)=>{    
          return(
          <Col className="main-content" md={4} key={index} >
              <div className="card main-back" style={{height: "100%"}}>
                <div className="card-body">
                  <h5 className="card-title">{entry.title}</h5>
                  <img className="image_size" src={entry.imgUrl} alt="not loading"></img>
                  <p className="card-text">{entry.rich_text}</p>
                  <p className="card-Author">Author(s): {entry.author}</p>
                  <p className="card-publisher"> Publisher: {entry.publisher}</p>
                  <div className='render-button-cont'>
                  <LinkContainer to={`/view/${entry.slug}`}>
                  <Button  variant="outline-secondary" className="rend-btn-elmnt"  >Read more</Button>
                  </LinkContainer>
                  <LinkContainer  to={`/edit/${entry.id}`}>
                  <Button  hidden={auth.accessToken? false : true} variant='outline-secondary' className="rend-btn-elmnt">edit</Button>
                  </LinkContainer>
                  </div>
                  {/* <Link to={`/blog_project/edit/${entry.id}`}>
                  <Button  variant='success' className="btn btn-primary">edit</Button>
                  </Link> */}
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

