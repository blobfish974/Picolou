import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainList from '../Components/MainList'
import BarDetails from '../Components/BarDetails'

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

export default createAppContainer(MainStackNavigator);