import { Routes } from '@angular/router';
import { Home } from './Mycomponents/home/home';
import { Login } from './Mycomponents/login/login';
import { Registration } from './Mycomponents/registration/registration';
import { UsersView } from './Mycomponents/users-view/users-view';

export const routes: Routes = [

  { path: '', component: Home},
  { path: 'login', component: Login},
  { path: 'register', component: Registration},
  { path: 'user', component: UsersView},
   { path: '**', component: Home },   
];
