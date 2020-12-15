import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Media() {
  return (
    <div className="container">
      <Header/>

      <div className="container" >
        <div className = " mt-5 row ">
          <a href="https://vk.com/activ_fakulteta_cithin" class="btn btn-primary btn-lg active offset-4" role="button" aria-pressed="true">VKontakte</a>
          <a href="https://www.instagram.com/cithin_muctr/" class="btn btn-danger btn-lg active offset-1" role="button" aria-pressed="true">Instagram</a>
        </div>
      </div>
      
      <Footer/>
    
    </div>
  )
}