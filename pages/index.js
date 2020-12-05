import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevContest App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <form className="col-10 offset-1" action="/input" method="POST">
        <div className="form-group">
          <label >Поисковый запрос</label>
          <input type="text" className="form-control" name="search" placeholder="example" />
        </div>
        <div className="form-group">
          <label >Придумать что-то еще</label>
          <input type="text" className="form-control" name="youremail"  placeholder="example" />
        </div>

        <button id="ButtonSumbit" type="submit" className="btn">Отправить</button>
      </form>

      <div className="output">
        output
      </div>

    </div>
  )
}
