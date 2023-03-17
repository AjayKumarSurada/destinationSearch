import {Component} from 'react'

import DestinationItem from '../DestinationItem'  

class  DestinationSearch extends Component {

    const {destinationsList} = this.props.destinationsList

    state = {searchInput: '', destinationsLists: list}

    onChangeSearchInput = event => {
      this.setState({searchInput: event.target.value})
    }

    render() {
      const {searchInput, destinationsLists} = this.state
      const searchResults = destinationsLists.filter(each =>
        each.name.includes(searchInput),
      )
      return (
        <div className="app-container">
          <h1 className="title">Destination List</h1>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul className="list-container">
            {searchResults.map(each => (
              <DestinationItem destinationDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      )
    }
  }

export default DestinationSearch
