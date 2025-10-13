import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    joinNow() {
    alert('Welcome to The Power House!');
  }
 
currentYear = new Date().getFullYear();

 // 👈 yahan apni image ka path do
  // currentYear = new Date().getFullYear();

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  hidecall(){
    this.toggleMenu();
  }


}
