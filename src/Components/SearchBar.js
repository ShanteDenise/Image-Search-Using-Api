import React from 'react'
import SearchResults from './SearchResults'
import {FormGroup, Label, Button, FormControl} from 'react-bootstrap';
import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_IMAGE_SEARCH}`

 class SearchBar extends React.Component {
     state = {
         value: "",
         searchResult:[]
     }

     handleChange = (e) =>{
         this.setState({
             value: e.target.value
         })
     }
     handleSubmit = (e) => {
         e.preventDefault()
         const searchValue = this.state.value
         console.log(searchValue)
         axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${searchValue}}`).then(res => {
             this.setState({
                 searchResult: res.data.results
             })
     
 })
     }
     

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <FormGroup>
                  <FormControl
                        class="field-container"
                        type='text'
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}/>
              </FormGroup>
          <Button className="btn-warning" type="submit">SUBMIT</Button>
          </form>
          <SearchResults results={this.state.searchResult}/>
          
      </div>
    )
  }
}

export default SearchBar
