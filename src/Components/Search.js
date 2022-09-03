import React from 'react'

function Search({searchResults}) {
    
    console.log(searchResults)
    if(!searchResults){
        return (
            <p>Searching ...</p>
        )
    }
    else if(searchResults.length === 0 || searchResults === null){
        return(
            <div>
                <h5>Ther is not any results ...</h5>
            </div>
        )
    }

  return (
    <div>
       <div>
       <div className="row">{searchResults.map((searchResult,index)=>{
         
          return(
          <div md={4}key={index} >
              <div className="card main-back">
                <div className="card-body">
                  <h5 className="card-title">{searchResult.fields.title}</h5>   
                  <p className="card-text">{searchResult.fields.richtext}</p>
                  <p className="card-Author">Author(s): {searchResult.fields.author}</p>
                  <p className="card-publisher"> Publisher: {searchResult.fields.publisher}</p>
                  
                </div>
              </div>
            </div>
          )
          }) }
        </div> 
      </div>
    </div>
  )
}

export default Search