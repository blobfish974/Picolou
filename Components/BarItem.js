import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
//import { getImageFromApi } from '../API/TMDBApi'

class BarItem extends React.Component {


    _display_Timetable(bar_times) {
        if(bar_times!=undefined){
            var time = [];
	        for(let i = 0; i < bar_times.length; i++){
                time.push(
                    <Text key={i} style={styles.time_text}> {bar_times[i]} </Text>
                )
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

  render() {
    //console.log(this.props)
    const { bar,displayDetailsForBar } = this.props // <==> const film = this.props.film & const displayDetailForFilm = this.props.displayDetailForFilm
    return (
        <TouchableOpacity 
            style={styles.main_container}
            onPress={() => displayDetailsForBar(bar)}>
          <Image
            style={styles.image}
            source={{uri: bar.picture_path}}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{bar.name}</Text>
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
                    <View style={styles.timetable_container_3_1}>
                        <Text style={styles.time_text} >Prix: {bar.price}</Text>
                    </View>
                    <View style={styles.timetable_container_3_2}>
                        <Text style={styles.time_text} >{bar.district}</Text>
                    </View>
                </View>
            </View>
          </View>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    backgroundColor:'white'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
    //backgroundColor:'orange'
  },
  header_container: {
    flex: 2,
    flexDirection: 'row',
    //backgroundColor:'green'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  time_text: {
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  timetable_container: {
    flex: 9,
    marginTop:3,
    flexDirection: 'row',
    //backgroundColor:'blue'
  },
  timetable_container_1: {
    flex: 2,
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
  timetable_container_3_1: {
    flex: 2,
    //backgroundColor:'black'
  },
  timetable_container_3_2: {
    flex: 3,
    //backgroundColor:'black'
  },
  description_container: {
    flex: 2,
    //marginTop:25,
    //backgroundColor:'red'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1,
    //backgroundColor:'yellow'
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default BarItem