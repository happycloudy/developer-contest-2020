import React, {useEffect, useState} from 'react'

export default class SearchForm extends React.Component{
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      console.log('Отправленное значение: ' + this.props.value);
      event.preventDefault();
    }
    handleChange(event) {
      this.props.setValue(event.target.value);
    }
    render(){
      return(
        <form onSubmit={this.props.GetData}>
          <label>
            <input type="text" name="search" className="form-control mt-5" id="searchInput"/>
          </label>
          <input type="submit" value="Отправить" />
        </form>
      )
    }
  }
