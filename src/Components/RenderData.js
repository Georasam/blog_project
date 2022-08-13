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
         <img src=""/>
        <p className="card-text">HUNTER OF THE NIGHT</p>
        <Button href="#" variant='success' className="btn btn-primary">Reade more</Button>
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