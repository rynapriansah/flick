import React, {Component, Fragment} from 'react';
import heroSection from '../assets/images/home/hero-section-illustration.svg'

class HomeFitur extends Component {
showSignModal = () => {
        const modal = document.getElementById("sign");
        modal.style.display = "flex";
    
        modal.classList.remove("fade-out");
        modal.classList.add("fade-in");
      }

render() {
	return (  <section id="content-dua">
	          <div className="container content-row">
	           <div className="content-left-col">
	          	<div className="content-text">
	          	<h2> Solusi Terbaik untuk <br/> 
	          	<span style={{color:"#DC143C"}}>Mengelola usaha</span><br/>
	          	kamu!
	          	</h2>
	          </div>
	          	<div className="">
	          	<a href="/" className="btn sign" id="regis"> Daftar Sekarang</a>
	          	<br/>                              
	          	<a href="#about" className="btn sign" id="regis-dua" > Pelajari dulu </a> 
	          </div>                             
	          </div>
	          <div className="content-right-col">  
	          <img src={heroSection}/>  
	          </div>
	          </div>
	          </section>
)
}
}
export default HomeFitur;