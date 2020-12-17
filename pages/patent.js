import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Search() {
  return (
    <body className ="container " style={{height:"100%", width:"100%"}}>
    <Header title="Main | UniDB"/>
    <div  className="container sm-w-100" id="patent" style={{width: "50vw"}}>
      <a href="/search" className="text-left"><h5>Go back</h5></a>
      <jsonout/>
    </div>

    <Footer/>

    </body>
  )
}

function jsonout(){
    let jsonData = require('../rudata.json');
  //console.log(jsonData);
  let str = ' ';
  let k=1;
    /*for (let i = 0; i< jsonData.length; i++  ) {
      if(jsonData[i].patentNumber =='94039156') k=i;
    }*/
    return(
      <div className="container">
      <div id="number" className="text-left">{jsonData[k].patentNumber}</div>
      <div id="country" className="text-left"></div>
      <div id="mpk" className="text-left"></div>
      <div id="application" className="text-left"></div>
      <div id="publicationDate" className="text-left"></div>
      <div id="authors" className="text-left"></div>
      <div id="Name" className="text-center"></div>
      <div id="abstract" className="text-justify"></div>
    </div>
    )
}
