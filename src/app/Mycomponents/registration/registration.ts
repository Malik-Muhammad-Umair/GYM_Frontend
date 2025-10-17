import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Myservice/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [NgIf, FormsModule,RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  
  credentials= {
    name:"",
    email: "",
    password: ""
  };
constructor(private user:UserService){


}

  currentYear = new Date().getFullYear();



  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  hidecall(){
    this.toggleMenu();
  }
   onsubmit(val:User){
this.user.postuser(val).subscribe((data:User)=>{
  if(data){

    window.location.href="/login"
      localStorage.setItem("username",this.credentials.name );
  }
  else{
    
    alert("Failure occure in posting")
  }
})
  }
}
