export const loadData = (name) => ({
    type: 'Load_Data',
    payload: name
})

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
