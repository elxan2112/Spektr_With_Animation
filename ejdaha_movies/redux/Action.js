export const changeName = (dispatch, url) =>{
    let data = []
    return async() =>{
        try{
            const response = await fetch(url)
            data = await response.json()
            dispatch(searching(data))
          }
          catch (e){
            console.log('Change name Action error: ' + e)
            console.log(url)
          }
    }
}

export const searching = (data) =>({
    type: 'searchAction',
    payloadData: data
})

export const addToFavorit = (favData) =>(
    console.log(favData),
    {
    type: 'addingAction',
    payload: favData,
})

export const cleanFavorites = ()=>({
    type: 'cleanFavoritesAction'
})

export const deleteFromFavorites = (index) =>(
    console.log(index),
    {
    type: 'removeAction',
    payloadIndex: index
})

export const cleanSearch = () =>({
    type: 'cleanSearchAction'
})
