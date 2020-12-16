import Head from './head'
import Footer from './footer'
import Header from './header'

export default function Search() {
  return (
    <div className="container">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>


      <Header title="Search | UniDB"/>
      <div className="container text-center">
        <h1>Quick search</h1>
        <div className="row">
        <form action="/input" method="POST">
            <input type="text" className="form-control mt-5" id="searchInput" placeholder="Search!" />
        </form>
        </div>
        <button onClick={json}>search</button>
        <div className="mt-5" id="list"></div>
      </div>
      
      <Footer/>
    </div>
  )
}

function json(){
  let jsonData = require('../rudata.json');
  //console.log(jsonData);
  
  let element = document.getElementById("list"); 
  let str = ' ';
    for (let i = 0; i< jsonData.length; i++  ) {
    if (jsonData[i]!==undefined) str +='<h4>'+jsonData[i].patentNumber+'</h4><b>'+jsonData[i].header+'</b><br>'+jsonData[i].Database+'<br><hr>';
    }

  element.innerHTML = str;
}

