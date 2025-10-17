import { UserService } from './../../Myservice/user-service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink,RouterOutlet,NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
constructor(private user:UserService){

}
  credentials = {
    email: "",
    password: ""
  };
  onsubmit(val:User){}

  // geting user info
  ngsubmit(){
    this.user.getuser().subscribe((data:User[])=>{

    
    const check=data.find(e=>
      e.email===this.credentials.email &&
      e.password===this.credentials.password 
  
    );

    if(check){
window.location.href="/category"
this.credentials.email=""
this.credentials.password=""
    }
    else{
      alert("Enter valid information")
    }

  },error=>{
  alert("Error fetching user data");
      console.error(error);
  }
 

);
  }


  currentYear = new Date().getFullYear();



  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  hidecall(){
    this.toggleMenu();
  }
}
