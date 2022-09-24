const apiUrl = "http://localhost:5050"


async function getBoardGames(){
    const response =await fetch (apiUrl + '/api/boardgames') 
    const result =await response.json()
    return result
}

async function getSingleBoardGame(gameName){
    const slug = gameName.replaceAll(" ", "_").toLowerCase()
    const response =await fetch (apiUrl + '/api/boardgames?filter=' + slug) 
    const result =await response.json()
    return result
}



async function gameEdit({id,title,
    author,
    imgUrl,
    richText,
    publisher}){
        
    const response =await fetch (apiUrl + `/api/boardgames/${id}`,{
        
        method: 'Put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,
            author,
            imgUrl,
            richText,
            publisher})
    })
    if (response.ok) {
        return getBoardGames()
    }

    throw Error('Edit Game failed')
    
}


async function addBoardGames( {title,
    author,
    imgUrl,
    richText,
    publisher} ) {
        
    const response = await fetch( apiUrl + '/api/boardgames', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,
            author,
            imgUrl,
            richText,
            publisher})
    })
    if (response.ok) {
        return getBoardGames()
    }

    throw Error('Adding author failed')
    
}



async function deleteBoardGames(id){
    const response =await fetch (apiUrl + `/api/boardgames/${id.id}`,{
        
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
    if (response.ok) {
        
        return getBoardGames()
    }

    throw Error('Edit Game failed')
}





export  {
    getBoardGames,
    addBoardGames,
    gameEdit,
    deleteBoardGames,
    getSingleBoardGame
}