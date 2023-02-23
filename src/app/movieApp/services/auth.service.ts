import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

interface AuthResponse{
  idToken: string;
  email:string;
  refreshToken: string;
  expiresIn: string;
  localId: string
  registered?: string // optinal
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDROrM-3poE7pwDiI3wvr2KJnT3q2G25g"
 url_login ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDROrM-3poE7pwDiI3wvr2KJnT3q2G25g"
  constructor(private http: HttpClient) { }
  signUp(email: string, password: string){
    return  this.http.post<AuthResponse>(this.url,{
      email: email,
      password: password,
      returnSecureToken: true
    })

  }
  login(email: string, password: string){
    return  this.http.post<AuthResponse>(this.url_login,{
      email: email,
      password: password,
      returnSecureToken: true
    })

  }
}
