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
        <form className="container"  onSubmit={this.props.GetData}>
          <label>
            <input className="d-flex justify-content-left" type="text" name="search" className="form-control mt-5" id="searchInput"/>
          </label>
          <br></br>
          <input className=" justify-content-center" type="submit" value="Отправить" />
        </form>
      )
    }
  }
