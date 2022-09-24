
import {useParams} from "react-router-dom"

function GameDetails ({data, getSingleGame}) {
    let { singleGameTitle } = useParams();
        const singleGameDetail = data.map((element, index) => {
            console.log(element)
            return element
        })
        console.log(singleGameDetail)
        /* const gameEntry = entries.find(element => element.title.toLowerCase() === singleGameTitle)
        console.log("gameentry", gameEntry)
        const gameImage = assets.find(element=> element.sys.id === gameEntry.fields.image.sys.id )
        console.log(gameImage)
        console.log("Entries", entries)
        console.log("Assets", assets) */
        
    return (
        <div className="body-game-details">
           <img className="game-detail-img"src={singleGameDetail.imgUrl} alt="not loading"/>  
            <div>
            <h1 className="game-detail-title">{singleGameDetail.title}</h1>
               
            <p className="game-detail-content">{singleGameDetail.richText}</p> 
            </div>
            
        </div>
    )
}

export default GameDetails