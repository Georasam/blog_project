import React from 'react'
import { Button } from 'react-bootstrap';
function RenderData({entries}) {
    console.log(entries )
  return (
    
        
      <div className="row">
       <div>{ entries.map((entry,index)=>{
return(
<div key={index} className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{entry.fields.title}</h5>
         <img src=''/>
        <p className="card-text">{entry.fields.richtext}</p>
        <p className="card-Author">{entry.fields.author}</p>
        <p className="card-publisher">{entry.fields.publisher}</p>
        <Button href="#" variant='success' className="btn btn-primary">watch movie</Button>
      </div>
    </div>
  </div>
)
}) }
  
  </div> 
</div>
    
  )
}

export default RenderData