import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Search() {
  return (
    <div className ="container " style={{height:"100%", width:"100%"}}>
    <Header/>
    <div className="container sm-w-100" style={{width: "50vw"}}>
    <Head title="Search Result | UniDB"/>

    // insert link to search result, patent
    </div>

    <Footer/>

    <style jsx>{`
      .text{
        text-align:center;
        padding-left: 0;
        padding-right: 30px;
      }
      @media (max-width: 600px){
        .sm-w-100{
          width: 100vw!important;
        }
      }
    `}
    </style>

    <style jsx global>{`
      body{
        font: normal normal 1.2rem Arial,Helvetica,sans-serif;
        text-decoration: none;
        text-align: left;
        line-height: 24px;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        text-transform: none;
        height: 100%;
      }
    `}
    </style>
    </div>
  )
}