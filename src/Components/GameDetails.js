import {useParams} from "react-router-dom"

function GameDetails ({entries, assets}) {

    function _getAssetUrl(assetId) {
        const found = assets.find(element => element.sys.id === assetId)
        return (
          found.fields.file.url
        )
      }

      let { SingleGameTitle } = useParams();
      console.log(SingleGameTitle)
    return (
        console.log("Entries", entries),
        console.log("Assets", assets),
        <div>
            {entries.filter((entry, index)=>{
                if (entry.fields.title === SingleGameTitle)
                console.log(entry)
                return (
                    <h1>{entry.fields.title}</h1>
                )
            })}
        </div>
    )
}

export default GameDetails