import React, {Component, Fragment} from 'react';
import HomeFitur from '../pages/HomeFitur';

class NavBar extends Component {
  

  render(){
  window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  })
  return (
  <Fragment>
  
  <nav id="header" className="navbar  navbar-expand-lg  bg navbar-light sticky-top">
  <div className="container"> 
  <a className="navbar-brand" href="#">xyzPOS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sticky-nav">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="sticky-nav">
    <div className="navbar-nav ml-auto">
      <a className="nav-link" style={{color: "pink"}} href="/">Fitur</a>                                                                          
      <a className="nav-link" href="#about">Berlangganan</a>
      <a href="/registrasi" className="btn sign" id="sign"> Masuk </a>                              
    </div>
    </div>
  </div>
</nav>


 <HomeFitur/>
 <section className="sec" id="about">
  <div className="content">
    <div className="mxw800p">
      <h3>Who We Are</h3>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <a href="#" className="btn">Read Our Story</a>
    </div>
  </div>
</section>
<HomeFitur/>
</Fragment>
    )

  }
}

export default  NavBar;