import React from 'react'
import SideNav from '../SideNav/SideNav'
import TopNav from '../TopNav/TopNav'
import './Quiz.css'


import Profile from '../../assets/profile.png'
const Quiz = () => {
  return (
    <div className='App' >
     
        <SideNav/>
        <div className="right">
        <div className="Nav">
        <div className='username'>Hello Araish , </div>

   
        <div className="rightdiv">
        <div className="search">
            
            <div className="text"> <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7.66683 14C11.1646 14 14.0002 11.1644 14.0002 7.66665C14.0002 4.16884 11.1646 1.33331 7.66683 1.33331C4.16903 1.33331 1.3335 4.16884 1.3335 7.66665C1.3335 11.1644 4.16903 14 7.66683 14Z" stroke="#A49F9F" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.6668 14.6666L13.3335 13.3333" stroke="#A49F9F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  Search for games,lectures,quizzes</div>
          
        </div>
        
        <div className="notification">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0201 2.90997C8.71009 2.90997 6.02009 5.59997 6.02009 8.90997V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.90997C18.0201 5.60997 15.3201 2.90997 12.0201 2.90997Z" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
        </div>
        <div className="profile">

            < img src={Profile} className="profileimage"  alt="" />
        </div>
        </div>
     

       
   </div>

    <div className="content">

        <div className="title">Put Your Sorting Skills to the Test: Engage in some Ultimate Sorting Algorithm Quizzes!</div>










<div className="card quizcard">
    <div className="time searching">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Searching</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>
<div className="card quizcard">
    <div className="time sorting">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Sorting</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>

<div className="card quizcard">
    <div className="time searching">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Searching</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>
<div className="card quizcard">
    <div className="time sorting">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Sorting</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>

<div className="card quizcard">
    <div className="time searching">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Searching</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>
<div className="card quizcard">
    <div className="time sorting">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Sorting</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>

<div className="card quizcard">
    <div className="time sorting">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Sorting</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>

<div className="card quizcard">
    <div className="time searching">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Searching</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>
<div className="card quizcard">
    <div className="time sorting">
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

Sorting</div>
<div className="head">Insertion sort revision and 
review  </div>
<div className="sub-heading">sort by iteratively placing elements in the correct position one at a time.</div>
<button>Take Quiz</button>
</div>


    </div>
    </div>
      
        
    </div>
  )
}

export default Quiz