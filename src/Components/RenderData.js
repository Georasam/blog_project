import React from 'react'
import { Button } from 'react-bootstrap';

import COL from 
function RenderData({entries}) {
    console.log(entries )
  
    
    


   
  
  return ( 
      <div>
       <div className="row">{ entries.map((entry,index)=>{
          return(
          <div key={index} className="col-sm-4">
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
            </div>
          )
          }) }
        </div> 
      </div>
    

  )
}

export default RenderData