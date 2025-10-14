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

  credentials = {
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
