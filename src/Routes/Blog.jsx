import React from "react";
import { Link } from "react-router-dom";




function Blog() {
    return (
      <div className="blog">
        
        <div className="toop">
          <h3>BLOG. DESTINATII.</h3>
          <p className="p1">Aici vei gasii tarile si orasele vizitate de noi impreuna cu experienta, preturi, pareri si sfaturi utile pentru o calatorie in care sa nu-ti bati capul</p>
          <p className="p2">Mai jos avem momentan doar doua orase si speram sa adaugam cat mai multe!!!</p>
          <img className="bgtop"  src="https://i.pinimg.com/originals/45/14/c6/4514c6e55c3014fe16072840dcdae308.gif"></img>         
          </div> 
           

           <div className="uae">
          <div className="titluuae">

          <div class="line-top"></div>

           <h3>Emiratele Arabe Unite</h3>

           <div class="line"></div>


          </div>
          </div>



          
          <div className="cards">
        <div className="blogcard">
        <Link className="linkd" to="Dubai">
        <h1 className="title">Dubai</h1>
        <img className="photod" src="https://i.pinimg.com/564x/37/52/1a/37521a8088a35fc24ccd44de809efe14.jpg"></img>
        </Link>
        </div>
        
        <div className="blogcardabu">
        <Link className="linka" to="AbuDhabi">
        <h1 className="abudhabi">Abu Dhabi</h1>
        <img className="photoa" src="https://i.pinimg.com/564x/13/94/d6/1394d691537b78dba640a7f0c060ad76.jpg"></img>
        </Link>
        </div>
        </div>
        
        </div>
         
         
        
        
      
        

       
        
    
    );
  }
  
  export default Blog;