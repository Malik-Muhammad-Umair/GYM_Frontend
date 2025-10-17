import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {

  }
  postuser(user:User):Observable<User>{
    const url="http://localhost:3000/users"
    return this.http.post<User>(url,user)
  }
  getuser():Observable<User[]>{
    const url="http://localhost:3000/users"
    return this.http.get<User[]>(url)
  }
}
