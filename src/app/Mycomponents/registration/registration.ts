import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [NgIf,FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  
  credentials= {
    name:"",
    email: "",
    password: ""
  };
  onsubmit(){

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
