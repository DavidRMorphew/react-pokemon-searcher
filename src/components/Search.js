import React from 'react'

class Search extends React.Component {
  
  
  render(){
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" name="filterTerm" className="prompt" onChange={this.props.onChange} value={this.props.value}/>
        <i className="search icon" />
      </div>
    </div>
     )
  }
}

export default Search
