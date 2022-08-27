import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function RenderData({entries}) {
    console.log(entries )
  return (
    
    <Container >

      <Row className="row">
       { entries.map((entry,index)=>{
return(
<Col key={index} className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{entry.fields.title}</h5>

         <img src='' alt=""/>
        <p className="card-text">{entry.fields.richtext}</p>
        <p className="card-Author">{entry.fields.author}</p>
        <p className="card-publisher">{entry.fields.publisher}</p>
        <Button href="#" variant='success' className="btn btn-primary">Read more...</Button>

      </div>
    </div>
  </Col>
)
}) }

   
</Row>
</Container>

  )
}

export default RenderData