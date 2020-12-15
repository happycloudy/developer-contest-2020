import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Media() {
  return (
    <div className="container">
      <Header title="Media | UniDB"/>
      <div className="container row mt-5" >
          <a href="https://vk.com/activ_fakulteta_cithin" className=" btn btn-primary btn-lg active offset-4" role="button" aria-pressed="true">VKontakte</a>
          <a href="https://www.instagram.com/cithin_muctr/" className="btn btn-danger btn-lg active offset-1" role="button" aria-pressed="true">Instagram</a>
      </div>
      <div className="row">
      <img src="./logo.jpg" className="img-fluid rounded mx-auto" alt="Logo"/>
      </div>
      <Footer/>
    
    </div>
  )
}