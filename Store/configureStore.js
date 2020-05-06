import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'

//export default createStore(toggleFavorite)


// DATA PERSISTENCE V1
/*
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
    key: 'root',
    storage,
}
export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite}))
*/


// DATA PERSISTENCE V2
import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist'

const rootPersistConfig = {
    key: 'root',
    storage:AsyncStorage,
}
export default createStore(persistReducer(rootPersistConfig, toggleFavorite))