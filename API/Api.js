



export function getBarsFromApi () {
    const url = 'https://paris-bar-api.herokuapp.com/'
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }


/*const API_TOKEN = "ef5b9034a8536d0e264f2b5ad585ff52";

export function getFilmsFromApiWithSearchedText (text,page) {
  //const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}*/




/*
const { Stitch, AnonymousCredential } = 
        require('mongodb-stitch-react-native-sdk');
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');

_loadClient() {
    Stitch.initializeDefaultAppClient('picolou_v1-hmjen').then(client => {
      this.setState({ client });
      const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, "mongodb-atlas");
      this.setState({atlasClient : dbClient});
      this.setState({db : dbClient.db("greetings")});
    });
  }*/