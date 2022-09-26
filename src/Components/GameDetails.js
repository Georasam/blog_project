import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

import {getSingleBoardGame} from "../Controllers/api";

function GameDetails () {
    let { gameSlug } = useParams();
    const [singleGameData, setSingleGameData] = useState();
    console.log(gameSlug)

    async function getSingleGame(){
        const singleBoardGame = await getSingleBoardGame(gameSlug);
        console.log(singleBoardGame)
        setSingleGameData(singleBoardGame)
    }
    console.log(singleGameData)

    useEffect(() => {
        getSingleGame();
      }, []);
        
      if (!singleGameData) {
        return <div>Data is Loading...</div>;
      }

    return (
        <div className="body-game-details">
           <img className="game-detail-img" src={singleGameData.imgUrl} alt="not loading"/>  
            <div>
            <h1 className="game-detail-title">{singleGameData.title}</h1>
            <p>{singleGameData.author}</p>
            <p className="game-detail-content">{singleGameData.richText}</p>
            <p>{singleGameData.publisher}</p>
            </div>
            
        </div>
    )
}

export default GameDetails