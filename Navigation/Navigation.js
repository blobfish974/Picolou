import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainList from '../Components/MainList'
import BarDetails from '../Components/BarDetails'
import Favorites from '../Components/Favorites'
import Parameters from '../Components/Parameters'
import Profile from '../Components/Profile'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const MainStackNavigator = createStackNavigator({
    MainList: {
    screen: MainList,
    navigationOptions: {
        title:'Liste des bars'
    }
  },
  BarDetails: {
    screen: BarDetails,
    navigationOptions: {
      title: 'Détail du bar'
    }
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
    screen: BarDetails,
    navigationOptions: {
      title: 'Détail du bar'
  }
  }
})

const ProfileStackNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  },
  Parameters: {
    screen: Parameters
  }
})


const BarTabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainStackNavigator,
      /*navigationOptions: {
        tabBarIcon: () => { 
          return <Image
            source={require('../Images/ic_list.png')}
            style={styles.icon}/> 
        }
      }*/
      navigationOptions: {
        tabBarLabel: 'Bar List',
        tabBarIcon: ({ tintColor }) => (
          //<MaterialCommunityIcons name="home" size={30} color={tintColor}/>
          <MaterialIcons name="format-list-bulleted" size={30} color={tintColor} />
        ),
      },
    },
    Favorites: {
      //screen: Favorites,
      screen: FavoritesStackNavigator,
      navigationOptions: {
        //tabBarLabel: 'Favorites',
        /*tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        },*/
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="heart" size={30} color={tintColor}/>
        ),
      },
    },
    Profile: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account" size={30} color={tintColor} />
        ),
      },
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#FFFFFF',
      activeTintColor: '#037BFF',
      inactiveBackgroundColor: '#DDDDDD', 
      //showLabel: false, 
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
})


//export default createAppContainer(MainStackNavigator);
export default createAppContainer(BarTabNavigator);