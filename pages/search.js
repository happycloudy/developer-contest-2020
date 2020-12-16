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
        <form action="/input" method="POST">
            <input type="text" className="form-control mt-5" id="searchInput" placeholder="Search!" />
        </form>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}