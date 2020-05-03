import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainList from '../Components/MainList'
import BarDetails from '../Components/BarDetails'
import Favorites from '../Components/Favorites'

const MainStackNavigator = createStackNavigator({
    MainList: {
    screen: MainList,
    navigationOptions: {
        title:'Liste des bars'
    }
  },
  BarDetails: {
    screen: BarDetails
  }
});

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  BarDetails: {
    screen: BarDetails
  }
})


const BarTabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainStackNavigator,
      navigationOptions: {
        tabBarIcon: () => { 
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/> 
        }
      }
    },
    Favorites: {
      //screen: Favorites,
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF', 
      showLabel: false, 
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})


//export default createAppContainer(MainStackNavigator);
export default createAppContainer(BarTabNavigator);