import React from 'react'
import { StyleSheet, Text } from 'react-native'
import BarList from './BarList'
import { connect } from 'react-redux'

class Favorites extends React.Component {

    render() {
      return (
        <BarList
          bars={this.props.favoritesBar}
          navigation={this.props.navigation}
        />
      )
    }
    /*render() {
      return (
        <Text>Favorites</Text>
      )
    }*/
  }
  
const styles = StyleSheet.create({})
  
const mapStateToProps = state => {
    return {
        favoritesBar: state.favoritesBar
    }
}
  
export default connect(mapStateToProps)(Favorites)