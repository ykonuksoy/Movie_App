import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { BehaviorSubject, Subject, catchError, observable, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';


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


    constructor(private http: HttpClient, private router: Router) { }
    
    signUp(email: string, password: string){
        return  this.http.post<AuthResponse>(this.url,{
          email: email,
          password: password,
          returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(
          Response => {
            this.handleAuthentication(Response.email, Response.idToken, Response.idToken, +Response.expiresIn)
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
         this.handleAuthentication(Response.email, Response.idToken, Response.idToken, +Response.expiresIn)
        }
      ));

    }

    logOut(){
      this.user.next(null);
      localStorage.removeItem("user");
      this.router.navigate(['/auth']);
    }
    autoLogin(){
      const user = JSON.parse(localStorage.getItem("user")!);

      if(!user){
        return;
      }
      const loadedUser = new User(
        user.email,
        user.id,
        user._token,
        new Date(user._tokenExpirationDate)
      );
      if(loadedUser.token){
        this.user.next(loadedUser);
      }
    }
    handleAuthentication(email: string, id: string, token: string, expiresIn: number){
      const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000))
      const user = new User(
        email,
        id,
        token,
        expirationDate
        );
        this.user.next(user);

        localStorage.setItem("user", JSON.stringify(user));
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
