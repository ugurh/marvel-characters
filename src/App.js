import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import md5 from 'md5';
import $ from 'jquery';



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
      selectedCharacter:null,
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
      const fetchedCharacters = result.data.results;
      this.setState({ characters: fetchedCharacters });
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
      </div>
    );
  }
}

export default App;
