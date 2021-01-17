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

export const blank = (status) => (
    console.log('blank action'),
    console.log(status),
    {
    type: 'Blank',
    payload: status
})
export const newsBlank = (status) => (
    console.log('blank action'),
    console.log(status),
    {
    type: 'newsBlank',
    payload: status
})

export const changeNewsBlank = (status) =>(
    console.log('change news blank action'),
    console.log(status),{
    type: 'changeNewsBlank',
    payload: status
})

export const changeBlank = (status) =>(
    console.log('change blank action'),{
    type: 'changeBlank',
    payload: status
})

export const loadingSplash = (visibleStatus)=>({
    type: 'loadingSplash',
    payload: visibleStatus
})

export const loadingErrorScreen = (connectionStatus) =>({
    type: 'loadingErrorScreen',
    payload: connectionStatus
})