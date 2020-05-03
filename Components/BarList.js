import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import BarItem from './BarItem'
import { connect } from 'react-redux'
//import { getBarsFromApi} from '../API/Api'

class BarList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bars: []
    }
  }

  _displayDetailsForBar= (bar) => {
    //console.log("Will display details for " + bar.name)
    this.props.navigation.navigate("BarDetails", { bar: bar }) // navigate('RouteName', { parameters })

}
componentDidMount() {

      //console.log(this.props)
      //console.log("up= componentdidMount bar list")
      

      /*this.setState({ isLoading: true })
      //this.props.loadBars()
      getBarsFromApi().then(data => {
        this.setState({
          bars: data,
          isLoading: false
        })
      })*/

      this.setState({bars:this.props.bars})
      
      
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.bars}
          extraData={this.props.favoritesBar}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <BarItem
              bar={item}
              isBarFavorite={(this.props.favoritesBar.findIndex(bar => bar.id === item.id) !== -1) ? true : false}
              displayDetailsForBar={this._displayDetailsForBar}
            />
          )}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesBar: state.favoritesBar
  }
}

export default connect(mapStateToProps)(BarList)