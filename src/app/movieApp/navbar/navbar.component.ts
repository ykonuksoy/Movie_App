import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService){}
  
    ngOnInit():void {
      this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
      })
    }
    logOutJob(){
      this.authService.logOut();
    }
}
