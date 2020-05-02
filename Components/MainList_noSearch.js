import React from 'react'
import { View, Button, FlatList, StyleSheet, ActivityIndicator, TextInput, SearchBar } from 'react-native'
import bars_data from '../Helpers/barData'
import BarItem from './BarItem'

class MainList extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText= ""
        this.page = 0
        this.totalPages = 0
        this.state = { 
            bars: [],
            isLoading: true 
        }
    }
    componentDidMount() { //_ car méthode privée (règle nommage)
    //_loadBars()

        
        this.setState({ isLoading: true })
        this.state.bars=bars_data
        //getFilmsFromApiWithSearchedText("star").then(data => console.log(data));
        /*getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
            this.page = data.page
            this.totalPages = data.total_pages
            this.setState({
              films: [ ...this.state.films, ...data.results ], // <==> films: this.state.films.concat(data.results)
              isLoading: false
            })
        })*/
        this.setState({ isLoading: false })
    }

    _displayLoading(bar) {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
    }
    _displayDetailsForBar= (bar) => {
        //console.log("Will display details for " + bar.name)
        this.props.navigation.navigate("BarDetails", { bar: bar }) // navigate('RouteName', { parameters })

    }

    _searchFilterFunction = text => {    
        const newData = this.state.filtered_bars.filter(item => {      
          const itemData = `${item.name.title.toUpperCase()}   
          ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        this.setState({ data: newData });  
      };

    _renderHeader = () => {    
        return (      
          <SearchBar        
            placeholder="Type Here..."        
            lightTheme        
            round        
            onChangeText={text => this._searchFilterFunction(text)}
            autoCorrect={false}             
          />    
        );  
      };

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.state.bars}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <BarItem bar={item} displayDetailsForBar={this._displayDetailsForBar}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      marginTop: 5
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100, //pour ne pas bloquer le button et le text input (position absolute -> élément au dessus de tous les autres)
      bottom: 100,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default MainList