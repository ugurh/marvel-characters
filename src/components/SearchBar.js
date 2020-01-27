/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

 class SearchBar extends Component {
     constructor(props){
         super(props);
     }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-ofset-3 search-bar">
                    <div className="input-group">
                        <input className="form-control input-lg" />
                        <button type="submit" className="btn btn-primary">Search</button>   
                    </div>
                </div>
            </div>
        )
    }
}
export default  SearchBar;