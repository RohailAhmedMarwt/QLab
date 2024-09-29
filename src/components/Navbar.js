import "./Navbar.css"
import {Link} from  "react-router-dom"
const Navbar = () =>{
  return(
    <>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">QLAB</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link-active" aria-current="page" to ="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link-active" aria-current="page" to ="/projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link-active" aria-current="page" to ="/aboutus">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link-active"  aria-current="page" to ="/term and conditions">Terms And Conditions</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link-active"  aria-current="page" to ="/contact us">Contact</Link>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <button class="btn " type="submit">Contact Us</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
export default Navbar