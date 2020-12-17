import Head from './head'
import Footer from './footer'
import Header from './header'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SearchForm from '../components/Searchform'
import Data from '../components/Data'

export default class Search extends React.Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this);
    this.state = {data: null}
  }

  getData = async (e) => {
    e.preventDefault()
    let req = e.target.elements.search.value
    let response
    try {
      response = await axios.post('http://localhost:3000/input',{
        searchName: req
        // "изготовление нано"
      });
    } catch (error) {
      console.error('error');
    }
    let data = response.data

    this.setState({
      data: data
    })
  }


  render(){
    return (
      <div className="container">
        <Header title="Search | UniDB"/>
        <div className="container text-center">
          <h1>Quick search</h1>
          <div className="row">

            <SearchForm GetData={this.getData}/>
          </div>

          <Data Data={this.state.data}/>

        </div>
        <Footer/>
      </div>
    )
  }

}



