import Head from './head'
import Footer from './footer'
import Header from './header'
import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function Search( {data} ) {

  return (
    <div className="container">
      <Header title="Search | UniDB"/>

      <ul className="mt-5" id="list" style={{display:"none"}}>
        {data.map( ({ header, patentNumber }) => (
          <a>
            <li key={patentNumber}>
            {header}
            <br />
            {patentNumber}
            </li>
          </a>
        ))}
      </ul>

      <Footer/>
    </div>
  )
}

export async function getStaticProps(context) {
    let response
    try {
      response = await axios.post('http://localhost:3000/input',{
        searchName: context
      });
    } catch (error) {
      console.error('error');
    }
    let data = response.data
    // console.log(data)
    return {
      props: {
        data
      }
    }
  }
