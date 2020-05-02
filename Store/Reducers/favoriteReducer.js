const initialState = { favoritesBar: [] }

function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
      case 'TOGGLE_FAVORITE':
        
        const favoriteBarIndex = state.favoritesBar.findIndex(item => item.id === action.value.id)
        //console.log("favorite bar index=",favoriteBarIndex)
        if (favoriteBarIndex !== -1) {
          // Le film est déjà dans les favoris, on le supprime de la liste
          nextState = {
            ...state,
            favoritesBar: state.favoritesBar.filter( (item, index) => index !== favoriteBarIndex)
          }
        }
        else {
          // Le film n'est pas dans les films favoris, on l'ajoute à la liste
          nextState = {
            ...state,
            favoritesBar: [...state.favoritesBar, action.value]
          }
        }
        return nextState || state
    default:
      return state
    }
  }
  
  export default toggleFavorite