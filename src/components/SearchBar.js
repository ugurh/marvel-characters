import React, { Component } from 'react'

 class SearchBar extends Component {
     constructor(props){
         super(props);
         this.state = {
             searchedKey:''
        };
     }
     onInputChange = (searchedKey) => {
        this.setState({ searchedKey:searchedKey });
      }
      handleKeyPress = event =>{
        if(event.key ==='Enter'){
            this.props.onSearchButtonClick(this.state.searchedKey);
            this.setState({searchedKey:''});
        }
      }

    render() {
        return (
            <div className="row">
                <div class="col-sm-3 col-md-3" ></div>
                <div className="col-sm-5 col-sm-offset-2 col-md-6 search-bar">
                    <div className="input-group">
                        <input className="form-control input-lg" value={this.state.searchedKey} 
                                onChange={e => this.onInputChange(e.target.value)} onKeyPress={this.handleKeyPress}/>
                        <button type="submit" className="btn btn-primary" onClick={() => this.props.onSearchButtonClick(this.state.searchedKey)}>Search</button>   
                    </div>
                </div>
            </div>
        )
    }
}
export default  SearchBar;