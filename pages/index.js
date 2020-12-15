import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../pages/header'
import Footer from '../pages/footer'
export default function Home() {
  return (
    <div className="container">
      <Header/>

      <div className="container" style={{height:"50vh", width:"100%"}}>

      </div>
      
      <Footer/>
    </div>
  )
}
