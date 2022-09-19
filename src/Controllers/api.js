const apiUrl = "http://localhost:5050"


async function getBoardGames(){
    const response =await fetch (apiUrl + '/api/boardgames') 
    const result =await response.json()
    console.log("heyyyyyyyyyy")
    return result
}

async function gameEdit({id,title,
    author,
    img_url,
    rich_text,
    publisher}){
        
    const response =await fetch (apiUrl + `/api/boardgames/${id}`,{
        
        method: 'Put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,
            author,
            img_url,
            rich_text,
            publisher})
    })
    if (response.ok) {
        console.log(title)
        return getBoardGames()
    }

    throw Error('Edit Game failed')
    
}

async function addBoardGames( {title,
    author,
    img_url,
    rich_text,
    publisher} ) {
        
    const response = await fetch( apiUrl + '/api/boardgames', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,
            author,
            img_url,
            rich_text,
            publisher})
    })
    if (response.ok) {
        return getBoardGames()
    }

    throw Error('Adding author failed')
    
}
async function deleteBoardGames(id){
    console.log(id)
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
    deleteBoardGames
}