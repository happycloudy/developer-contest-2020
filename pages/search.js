import Footer from './footer'
import Header from './header'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SearchForm from '../components/Searchform'
import Data from '../components/Data'
import qs from 'qs'

export default class Search extends React.Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state = {
      data: null,
      info: {
        patentNumber: undefined,
        country: undefined,
        mpk: undefined,
        application: undefined,
        pubDate: undefined,
        author1: undefined,
        author2: undefined,
        abstract: undefined
      },
      isPatent: false
    }
  }

  getData = async (e) => {
    e.preventDefault()
    let req = e.target.elements.search.value
    let data
    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify( {searchname: req}),
      url: 'http://localhost:3000/input',
    })
      .then(function (response) {
        data = response.data
      });

    this.setState({
      data: data
    })
  }

  getInfo = async (e) => {
    e.preventDefault()
    let req = e.target.getAttribute("name")
    let database = e.target.getAttribute("title")
    console.log(database)
    let data
    await axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify( {patentnum: req, database: database}),
      url: 'http://localhost:3000/patent',
    })
      .then(function (response) {
        data = response.data
      });

    this.setState({
      info: {
        patentNumber: data.patentNumber,
        country: data.country,
        mpk: data.mpk,
        application: data.application,
        publDate: data.publDate,
        author1: data.author1,
        author2: data.author2,
        abstract: data.abstract,
        patentName: data.patentName
      },
      isPatent: !this.state.isPatent
    })
    console.log(this.state.info)
  }

  goBack = () => {
    this.setState({
      isPatent: !this.state.isPatent
    })
  }

  render(){
    return (
      <div className="container">
        <Header title="Search | UniDB"/>

        <div className="container text-center">
          <h1>Quick search</h1>
          {!this.state.isPatent &&
          <div className="row">
            <SearchForm GetData={this.getData} />
          </div>}

          <Data Data={this.state.data} goBack={this.goBack} Info={this.state.info} isPatent={this.state.isPatent} getInfo={this.getInfo}/>
        </div>
        <Footer/>
      </div>
    )
  }

}



