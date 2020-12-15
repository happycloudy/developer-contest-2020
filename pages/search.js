import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Search() {
  return (
    <div className="container">
      <Header title="Search | UniDB"/>
      <div className="container text-center">
        <h1>Quick search</h1>
        <div className="row">
        <input type="text" class="form-control mt-5" id="searchInput" placeholder="Search!"/>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}