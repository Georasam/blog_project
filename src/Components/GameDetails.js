
import {useParams} from "react-router-dom"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function GameDetails ({entries, assets}) {
    let { singleGameTitle } = useParams();
    
      const gameEntry = entries.find(element => element.fields.title.toLowerCase() === singleGameTitle)
      console.log("gameentry", gameEntry)
      const gameImage = assets.find(element=> element.sys.id === gameEntry.fields.image.sys.id )
      console.log(gameImage)
        console.log("Entries", entries)
        console.log("Assets", assets)
        
    return (
      
        <div className="body-game-details">
           <img className="game-detail-img"src={gameImage.fields.file.url} alt="not loading"/>  
            <div>
            <h1 className="game-detail-title">{gameEntry.fields.title}</h1>
               
            <p className="game-detail-content">{documentToReactComponents(gameEntry.fields.richText)}</p> 
            </div>
            
        </div>
    )
}

export default GameDetails