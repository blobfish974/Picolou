import React from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TextInput} from 'react-native'
//import bars_data from '../Helpers/barData'
import BarItem from './BarItem'
import { getBarsFromApi} from '../API/Api'

class MainList extends React.Component {

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
    }
    componentDidMount() { //_ car méthode privée (règle nommage)
    //_loadBars()

        
        this.setState({ isLoading: true })
        //this.setState({bars:bars_data})
        //this.arrayholder=bars_data
        //this.setState({ isLoading: false })

        
        getBarsFromApi().then(data => {
            this.setState({
              bars: data,
              isLoading: false
            })
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
            <View style={{flex:1}} >
                <View style={{backgroundColor:'white',height:5}} >
        
                </View>
                <View style={styles.main_container}>
                    <TextInput 
                        style={styles.textinput}
                        onChangeText={(text) => {
                            this._searchFilterFunction(text);
                        } }
                        underlineColorAndroid='transparent'
                        placeholder="  Search Here" />
                    <FlatList
                    data={this.state.bars}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <BarItem bar={item} displayDetailsForBar={this._displayDetailsForBar}/>}
                    />
                    {this._displayLoading()}
                </View>
            </View>
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
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      backgroundColor: '#EDEDEF',
      paddingLeft: 5,
      borderRadius:20
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
      }
  })

export default MainList