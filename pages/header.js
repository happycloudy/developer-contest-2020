import Link from 'next/link'
import Head from '../pages/head'
export default  function Header(props) {
    return (
      <div>
        <Head title={props.title}/>
      <nav className="navbar navbar-expand-lg navbar-light ">
        
        <div className="col-lg-3 col-md-12 Logo">
          <h2><a href="/">UniDB</a></h2>
        </div>
        <button className="navbar-toggler" id="navButton" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse offset-6" id="navbarNavDropdown">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" >Main </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link href="/media">
                  <a className="dropdown-item" >Media</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      

        <style jsx global>{`
        @media (max-width:600px) {
          #navButton{
            display:block;
            margin-top:5vw;
            border: 3px solid!important;
            margin-left: 40%;
          }
        }
        .nav-link{
            color:#454545;
            alink:black;
            vlink:#454545;
            active:black;
        }
        .Logo{
            text-align:center;
            font-size: 1.1rem;

          }
          .navbar{
            font: normal normal 1rem Arial,Helvetica,sans-serif;
          }

        `}
        </style>
      </nav>
      </div>
  )
}