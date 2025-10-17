import { Routes } from '@angular/router';
import { Home } from './Mycomponents/home/home';
import { Login } from './Mycomponents/login/login';
import { Registration } from './Mycomponents/registration/registration';
import { UsersView } from './Mycomponents/users-view/users-view';
import { Category } from './Mycomponents/category/category';
import { CategoryPost } from './Mycomponents/category-post/category-post';

export const routes: Routes = [

  { path: '', component: Home},
  { path: 'category', component: Category},
  { path: 'category-post', component: CategoryPost},
  { path: 'home', component: Home},
  { path: 'login', component: Login},
  { path: 'register', component: Registration},
  { path: 'user', component: UsersView},
   { path: '**', component: Home },   
];
