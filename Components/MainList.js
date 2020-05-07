import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput, SafeAreaView, Image} from 'react-native'
//import bars_data from '../Helpers/barData'
//import BarItem from './BarItem'
import BarList from './BarList'
import { getBarsFromApi} from '../API/Api'

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

class MainList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    //console.log("navigation:",navigation)
    //console.log("params:",params)
    //if (params.goToParameters != undefined) {
      return {
          headerRight: () => <TouchableOpacity
                          style={styles.touchable_headerrightbutton}
                          onPress={() => params.goToParameters()}>
                          <Image
                            style={styles.share_image}
                            source={require('../Images/ic_gear.png')} />
                        </TouchableOpacity>
      }
    //}
  }

    constructor(props) {
        super(props)
        this.page = 0
        this.totalPages = 0
        this.state = { 
            bars: [],
            isLoading: true 
        }
        this.arrayholder=[]
        this.searchedText= ""
        this._goToParameters=this._goToParameters.bind(this)
    }
    componentDidMount() { 
        this.setState({ isLoading: true }, () => { this._updateNavigationParams() })
        //this.setState({bars:bars_data})
        //this.arrayholder=bars_data
        //this.setState({ isLoading: false })


        this._loadBars()
        /*getBarsFromApi().then(data => {
          this.setState({
            bars: data,
            isLoading: false
          })
        })*/
    }
    _updateNavigationParams() {
      //console.log("OOOOOOOKKKKK _updateNavigationParams")
      this.props.navigation.setParams({
        goToParameters: this._goToParameters
      })
    }
    _goToParameters() {
      //console.log("YYEEEAAAAAAHHHH (go to parameters")
      this.props.navigation.navigate("Parameters")
    }

    _loadBars() {
      getBarsFromApi().then(data => {
        this.setState({
          bars: data,
          isLoading: false
        })
        this.arrayholder=data
      })
    }

    _displayLoading(bar) {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
              <Text style={styles.loading_text}>Chargement des meilleurs bars  ... </Text>
            </View>
            
          )
        }
    }
    _displayDetailsForBar= (bar) => {
        //console.log("Will display details for " + bar.name)
        this.props.navigation.navigate("BarDetails", { bar: bar }) // navigate('RouteName', { parameters })

    }

    _searchFilterFunction = text => {    
      /*console.log("searching for;")
      console.log(text)
      console.log(this.arrayholder)
      console.log(this.state.bars)*/
        const newData = this.arrayholder.filter(item => {    
            const itemData = item.name.toUpperCase();
           const textData = text.toUpperCase();
           return itemData.indexOf(textData) > -1; 
           
        });
        
        this.setState({ bars: newData }); 
        this.searchedText=text;
        
      };

    render() {
        return (
          <SafeAreaView style={styles.main_container}>
            <View style={{flex:1}} >
                <View style={{backgroundColor:'white',height:5}} >
        
                </View>
                <View style={styles.main_container}>
                  <View style={styles.search_container} >
                    <MaterialIcons name="search" size={35} color="grey" style={{padding:10}} />
                    <TextInput 
                        style={styles.textinput}
                        onChangeText={(text) => {
                            this._searchFilterFunction(text);
                        } }
                        underlineColorAndroid='transparent'
                        placeholder="Search"
                        clearButtonMode='while-editing' />
                    {/*<Entypo.Button name="cross" size={24} color="black" onPress={this.searchedText= ""}/>*/}
                    
                  </View>
                    {/*<FlatList
                    data={this.state.bars}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <BarItem bar={item} displayDetailsForBar={this._displayDetailsForBar}/>}
                    />*/}
                    <BarList
                      bars={this.state.bars} //on cherche les bars directement depuis le component MainList!
                      navigation={this.props.navigation}
                    />
                    {this._displayLoading()}
                </View>
            </View>
          </SafeAreaView>
        )
      }
    
    /*_renderHeader = () => {    
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
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList          
                data={this.state.data}          
                renderItem={({ item }) => ( 
                    <ListItem              
                        roundAvatar              
                        title={`${item.name.first} ${item.name.last}`}  
                        subtitle={item.email}                           
                        avatar={{ uri: item.picture.thumbnail }}   
                        containerStyle={{ borderBottomWidth: 0 }} 
                    />          
                    )}          
                keyExtractor={item => item.email}  
                ItemSeparatorComponent={this.renderSeparator} 
                ListHeaderComponent={this.renderHeader}                             
            />            
        </List>

        <FlatList
          data={this.state.bars}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <BarItem bar={item} displayDetailsForBar={this._displayDetailsForBar}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }*/

}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      //marginTop: 5,
      backgroundColor:'white'
    },
    search_container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EDEDEF',
      borderRadius:20,
      paddingLeft: 5,
      marginLeft: 5,
      marginRight: 5,
      height: 50,
    },
    textinput: {
      flex:1,
      //marginLeft: 5,
      //marginRight: 5,
      //height: 50,
      //backgroundColor: '#EDEDEF',
      //paddingLeft: 5,
      //borderRadius:20
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100, //pour ne pas bloquer le button et le text input (position absolute -> élément au dessus de tous les autres)
      bottom: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },
    loading_text: {
        left: 0,
        right: 0,
        top: 140, //pour ne pas bloquer le button et le text input (position absolute -> élément au dessus de tous les autres)
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      share_image: {
        width: 30,
        height: 30
      },
      touchable_headerrightbutton: {
        marginRight: 8
      }
  })

export default MainList