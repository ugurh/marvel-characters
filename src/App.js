import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import md5 from 'md5';
import $ from 'jquery';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import SearchBar from './components/SearchBar'
import CharacterList from './components/CharacterList'
import Detail from './components/Detail'

const API_URL = 'https://gateway.marvel.com:443/v1/public/characters?';
const publicKey = 'b55da60dbc60b7c8dde1a4dfe153938f';
const privateKey = '08053009117dcda36e856e87eb90e8dd8ba0ef9a';
const ts = '1';
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`;



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      characters: null,
      selectedCharacter:null
    };
    this.handleChangeSelectedCharacter = this.handleChangeSelectedCharacter.bind(this);
  }

  componentDidMount = () => { //componentler render edilmeden önce çalışır.
    this.GetInitialChararcters();
  };

  GetInitialChararcters = () =>{
    $.getJSON(`${API_URL}${auth}&limit=5`, result => {
      const fetchedCharacters = result.data.results;
      this.setState({ characters: fetchedCharacters });
    });
  }

  onSearchButtonClick = (searchedKey) =>{
    $.getJSON(`${API_URL}${auth}&limit=5&nameStartsWith=${searchedKey}`, result => {      
      if(result.data.count ===0){
          this.handleOnClose();
        return false;
      }
      const fetchedCharacters = result.data.results;
      this.setState({ characters: fetchedCharacters });
    });
  }

   handleOnClose = () => {
    Alert.error('Can not found any Characters!', {
      position: 'top-right',
      effect: 'slide'
    });
  }

  handleChangeSelectedCharacter = (character) =>{
    this.setState({selectedCharacter:character});
  }

  render() {
    if(!this.state.characters)
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    return (
      <div className="container">
          <SearchBar onSearchButtonClick={this.onSearchButtonClick}/> 
          <div className="row">
             <CharacterList characters={this.state.characters} handleChangeSelectedCharacter={this.handleChangeSelectedCharacter}/>
             <Detail character ={this.state.selectedCharacter || this.state.characters[0]}/>
          </div> 
          <Alert stack={true} timeout={2000} />
      </div>
    );
  }
}

export default App;
