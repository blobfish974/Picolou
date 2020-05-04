import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Linking, Button, TouchableOpacity, SafeAreaView} from 'react-native'
//import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import { connect } from 'react-redux'

class BarDetails extends React.Component {

  

  constructor(props) {
    super(props)
    this.state = {
      bar: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    /*getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })*/
    //console.log(this.props.navigation.state.params)


    if(this.props.navigation.state.params!=undefined){
        this.setState({
            bar: this.props.navigation.state.params.bar,
            isLoading: false
          })
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
  _display_Timetable(bar_times) {
    if(bar_times!=undefined){
        var time = [];
        if(bar_times=="None"){
            for(let i = 0; i < 7; i++){
                time.push(
                    <Text key={i}> / </Text>
                )
            }
        }
        else{
            for(let i = 0; i < bar_times.length; i++){
                time.push(
                    <Text key={i}> {bar_times[i]} </Text>
                )
            }
        }
        
        /*time.push( <Text style={styles.time_text} >{bar.timetable[0]} </Text>)
        time.push( <Text style={styles.time_text} >{bar.timetable[1]} </Text>)
        time.push( <Text style={styles.time_text} >Mer: {bar.timetable[2]} </Text>)
        time.push( <Text style={styles.time_text} >Jeu: {bar.timetable[3]} </Text>)
        time.push( <Text style={styles.time_text} >Ven: {bar.timetable[4]} </Text>)
        time.push( <Text style={styles.time_text} >Sam: {bar.timetable[5]} </Text>)
        time.push( <Text style={styles.time_text} >Dim: {bar.timetable[6]} </Text>)*/
    return (
    <View>
        { time }
    </View>
    )
    }
}

  _displayBar() {
    const { bar } = this.state
    if (bar != undefined) {
      return (
        <SafeAreaView style={styles.main_container}>
        <ScrollView style={styles.scrollview_container}>
            <Image
            style={styles.image}
            source={{uri: bar.picture_path}}
            />

            <Text style={styles.title_text}>{this.state.bar.name}</Text>
            <View style={styles.timetable_container_header}>
                <View style={styles.timetable_container_1}>
                <TouchableOpacity
                style={styles.favorite_container}
                onPress={() => this._toggleFavorite()}>
                {this._displayFavoriteImage()}
            </TouchableOpacity>

                </View>
                <View style={styles.timetable_container_2}>
                    <Text style={styles.time_text_title} >Horaires</Text>
                </View>
                <View style={styles.timetable_container_3}>
                    <Text style={styles.time_text_title} >Happy hour</Text>
                </View>
            </View>
            <View style={styles.timetable_container}>
                <View style={styles.timetable_container_1}>
                    <Text style={styles.time_text} >Lun:</Text>
                    <Text style={styles.time_text} >Mar:</Text>
                    <Text style={styles.time_text} >Mer:</Text>
                    <Text style={styles.time_text} >Jeu:</Text>
                    <Text style={styles.time_text} >Ven:</Text>
                    <Text style={styles.time_text} >Sam:</Text>
                    <Text style={styles.time_text} >Dim:</Text>
                </View>
                <View style={styles.timetable_container_2}>
                    {this._display_Timetable(bar.timetable)}
                </View>
                <View style={styles.timetable_container_3}>
                    {this._display_Timetable(bar.happy_hour)}
                </View>
            </View>
            <Text style={styles.default_text}>Prix: {bar.price}</Text>
            <Text style={styles.default_text}>Quartier: {bar.district}</Text>
            <TouchableOpacity style={styles.maps_link} onPress={() => Linking.openURL(bar.google_maps)}>
                <Text style={{color:'white'}}>Itinéraire via maps</Text>
            </TouchableOpacity>
            <Text style={styles.default_text}>Adresse: {bar.address}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL( bar.web_site)}>Site web </Text>
            <Text style={styles.link} onPress={() => Linking.openURL(`tel:${bar.tel}`)}>Téléphoner au bar </Text>
            <Text style={styles.default_text}>Tel: {bar.tel}</Text>
            <Text style={{marginBottom:5}}></Text>
            
        </ScrollView>
        </SafeAreaView>
      )
    }
  }
  _displayFavoriteImage() {
    var sourceImage = require('../Images/ic_favorite_border.png')
    if (this.props.favoritesBar.findIndex(item => item.id === this.state.bar.id) !== -1) {
      sourceImage = require('../Images/ic_favorite.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
}
_toggleFavorite() {
  const action = { type: "TOGGLE_FAVORITE", value: this.state.bar }
  this.props.dispatch(action)
}

componentDidUpdate() {
  //console.log("componentDidUpdate : ")
  //console.log(this.props.favoritesBar)
}

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayBar()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 20,
    marginRight: 5,
    marginTop: 5,
  },
  link: {
    marginLeft: 20,
    marginRight: 5,
    marginTop: 5,
    color:'blue'
  },
  maps_link: {
    padding:10,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor:'#33A350',
    alignItems: "center",
    borderRadius:20,
  },
  time_text: {
    textAlign: 'center',
    color: '#000000'
  },
  timetable_container_header: {
    flex: 1,
    marginTop:3,
    flexDirection: 'row',
    //backgroundColor:'blue'
  },
  timetable_container: {
    flex: 9,
    marginTop:10,
    marginBottom:15,
    flexDirection: 'row',
    //backgroundColor:'blue'
  },
  timetable_container_1: {
    flex: 2,
    marginLeft:5
    //backgroundColor:'orange'
  },
  timetable_container_2: {
    flex: 3,
    //backgroundColor:'yellow'
  },
  timetable_container_3: {
    flex: 3,
    //backgroundColor:'black'
  },
  favorite_container: {
    alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
    },
  favorite_image: {
        width: 40,
        height: 40
  }
})

//export default BarDetails
const mapStateToProps = (state) => {
  return {
    favoritesBar: state.favoritesBar
  }
}

export default connect(mapStateToProps)(BarDetails)