import React from 'react'
import { StyleSheet, View, Text,SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Octicons } from '@expo/vector-icons'; 

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this._goToParameters=this._goToParameters.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    //console.log("navigation:",navigation)
    //console.log("params:",params)
    //if (params.goToParameters != undefined) {
      return {
          headerRight: () => <TouchableOpacity
                          style={styles.touchable_headerrightbutton}
                          onPress={() => params.goToParameters()}>
                          {/*<Image
                            style={styles.share_image}
                          source={require('../Images/ic_gear.png')} />*/}
                            <Octicons name="gear" size={30} color="grey" />
                        </TouchableOpacity>
      }
    //}
  }

  _goToParameters() {
    //console.log("YYEEEAAAAAAHHHH (go to parameters")
    this.props.navigation.navigate("Parameters")
  }
  _updateNavigationParams() {
    //console.log("OOOOOOOKKKKK _updateNavigationParams")
    this.props.navigation.setParams({
      goToParameters: this._goToParameters
    })
  }
  componentDidMount() { 
    this.setState({ isLoading: true }, () => { this._updateNavigationParams() })
}

  render() {
    return (
      <SafeAreaView style={styles.main_container}>
        <View style={styles.main_container}>
          <View style={styles.subview_container}>
            <Text>Youpi, j'ai un onglet profile!</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subview_container: {
    
  },
  share_image: {
    width: 30,
    height: 30
  },
  touchable_headerrightbutton: {
    marginRight: 8
  }
})

export default Profile