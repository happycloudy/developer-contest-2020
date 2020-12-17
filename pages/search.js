import Head from './head'
import Footer from './footer'
import Header from './header'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SearchForm from ''


export default function Search( {data} ) {

  const [Data, setData] = useState(false)
  const [value,setValue] = useState("нач знач")

  return (
    <div className="container">
      <Header title="Search | UniDB"/>
      <div className="container text-center">
        <h1>Quick search</h1>
        <div className="row">
          <SearchForm value={value} setValue={setValue}/>
        </div>

        <ul className="mt-5" id="list" style={{display:"none"}}>
          {data.map( ({ header, patentNumber }) => (
            <a>
              <li key={patentNumber}>
              {header}
              <br />
              {patentNumber}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  )
}


class SearchForm extends React.Component{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log('Отправленное значение: ' + this.props.value);
    event.preventDefault();
  }
  handleChange(event) {
    this.props.setValue(event.target.value);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.props.value} onChange={this.handleChange} className="form-control mt-5" id="searchInput"/>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }
}

export async function getStaticProps(props) {
  let response
  try {
    response = await axios.post('http://localhost:3000/input',{
      searchName: "изготовление нано"
    });
  } catch (error) {
    console.error('error');
  }
  let data = response.data
  return {
    props: {
      data
    }
  }
}