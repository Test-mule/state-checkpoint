import React, { Component } from 'react'
import ProfilePhoto from '../ProfilePhoto.jpg';
import { Button } from 'react-bootstrap';
import './Profile.css';

let  bio='Currently learning FullStack development and open to learning new technologies and  receiving feedback!';

export default class Profile extends Component {
 constructor(props) {
   super(props);
    this.state = {Person:{
      fullName: "Zeineb Moalla",
      bio: bio,
      profession: "Software Engineering Student",
      imgSrc: ProfilePhoto,},
      show: true
    };
  }
  handleShowPerson = () => {
   this.setState({
     ...this.state,
     show: !this.state.show
     });
  };
    
 render() {
   return (
     <div>
       <br/>
       <center><Button variant="outline-light"onClick={this.handleShowPerson}>Click me!</Button>{' '}</center>
       <br/><br />
       <div className='about'>
          {this.state.show && (
         <div style={{color: 'blueviolet'}}>
         <h1 className='name'>{this.state.Person.fullName}</h1>
         <img className='Myimage' src={this.state.Person.imgSrc} alt='Me'></img>
         <h2 className= 'profession'>{this.state.Person.profession}</h2>
        <h3>{this.state.Person.bio}</h3>
      </div>
      )}
   </div></div>
    
   );
  }
}
