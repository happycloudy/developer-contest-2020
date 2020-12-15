import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../pages/header'
import Footer from '../pages/footer'
export default function Home() {
  return (
    <div className="container">
      <Header/>

      <div className="container" style={{height:"50vh", width:"100%"}}>

        <div className = "container mt-5 text-center">
          <h1>Unified patent search engine</h1>
          <h2>Find for any patent from all sides of the world</h2>
        </div>

        <div className = "container mt-5 text-center">
          <h1>Why we?</h1>
          <h2>Our website provides access to all worldwide data bases.<br/>
          With intuitive design you can easily find every patent you need.</h2>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
