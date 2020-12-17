import Head from './head'
import Footer from './footer'
import Header from './header'
import Patentfound from '../components/Patentfound'
export default function Search(props) {
  return (
    <body className ="container " style={{height:"100%", width:"100%"}}>
    <Header title="Main | UniDB"/>
    <div  className="container sm-w-100" id="patent" style={{width: "50vw"}}>
      <a href="/search" className="text-left"><h5>Go back</h5></a>
      <Patentfound />
    </div>
    <Footer/>
    </body>
  )
}
