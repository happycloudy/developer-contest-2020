import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Search() {
  return (
    <body className ="container " style={{height:"100%", width:"100%"}}>
    <Header title="Main | UniDB"/>
    <div  className="container sm-w-100" id="patent" style={{width: "50vw"}}>
      <a href="/search" className="text-left"><h5>Go back</h5></a>
      <Jsonout/>
    </div>

    <Footer/>

    </body>
  )
}

function Jsonout(){
    let jsonData = require('../patent.json');
    return(
      <div className="container mt-5">
      <div id="number" className="text-left"><b>Patent Number: </b>{jsonData.patentNumber}</div>
      <div id="country" className="text-left"><b>Country: </b>{jsonData.country}</div>
      <div id="mpk" className="text-left"><b>Current International Classification: </b>{jsonData.mpk}</div>
      <div id="application" className="text-left"><b>App.: </b>{jsonData.application}</div>
      <div id="publicationDate" className="text-left"><b>Publ.: </b>{jsonData.publDate}</div>
      <div id="authors" className="text-left"><b>Authors: </b>{jsonData.author1}<br/>{jsonData.author2}</div>
      <div id="Name" className="text-center mt-5"> <h4>НАЗВАНИЕ IMПАТЕНТА</h4></div>
      <div id="abstract" className="text-justify">{jsonData.abstract}</div>
      </div>
    )
}
