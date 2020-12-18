import Footer from './footer'
import Header from './header'
import Patentfound from '../components/Patentfound'
import React, {useEffect, useState} from 'react'
import qs from 'qs'
import axios from 'axios'

export default class Search extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div  className="container sm-w-100" id="patent" style={{width: "50vw"}}>
        <a href="#" className="text-left text-dark" onClick={this.props.goBack}><h5>Go back</h5></a>
        <Patentfound
        patentNumber={this.props.Info.patentNumber}
        country={this.props.Info.country}
        mpk={this.props.Info.mpk}
        application={this.props.Info.application}
        publDate={this.props.Info.publDate}
        author1={this.props.Info.author1}
        author2={this.props.Info.author2}
        abstract={this.props.Info.abstract}
        patentName={this.props.Info.patentName}
         />
      </div>
    )
  }
}
