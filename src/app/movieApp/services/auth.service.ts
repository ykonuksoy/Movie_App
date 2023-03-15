import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { BehaviorSubject, Subject, catchError, observable, tap, throwError } from 'rxjs';
import { User } from '../models/user';


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
    
    user = new BehaviorSubject<User|null>(null);


    constructor(private http: HttpClient) { }
    
    signUp(email: string, password: string){
        return  this.http.post<AuthResponse>(this.url,{
          email: email,
          password: password,
          returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(
          Response => {
            const expirationDate = new Date(new Date().getTime() + (+Response.expiresIn * 1000))
            const user = new User(
              Response.email,
              Response.localId,
              Response.idToken,
              expirationDate
              );
              this.user.next(user);

          }
        ));

      }


      login(email: string, password: string){
        return  this.http.post<AuthResponse>(this.url_login,{
          email: email,
          password: password,
          returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(
          Response => {
            const expirationDate = new Date(new Date().getTime() + (+Response.expiresIn * 1000))
            const user = new User(
              Response.email,
              Response.localId,
              Response.idToken,
              expirationDate
              );
              this.user.next(user);

          }
        ));

      }
      private handleError(response: HttpErrorResponse){
        let message = "bir hata oluştu";
        console.log(response.error.error)
        if(response.error.error){
          switch(response.error.error.message){
            case "EMAIL_EXISTS":
              message = "bu mail adresi kullanılmıştır";
              break;
            case "INVALID_PASSWORD":
              message = "hatalı parola";
              break;
          
          }
          
        }
        return throwError (message);
    }
}
