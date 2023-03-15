import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loading: boolean = false;
  error: string ="";

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void{
 
  }

  onSubmit(form: NgForm){
    if(form.invalid)
    return;
    //console.log(form.value)

    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password).subscribe(Response => {
      console.log(Response);
    }, err => {
      this.error = err;
    })

  }

  onLogin(form: NgForm){

    if(form.invalid)
    return;
    //console.log(form.value)
   this.loading = true;
    const email = form.value.email;
    const password = form.value.password;


    this.authService.login(email, password).subscribe(Response => {
      console.log(Response);
      this.loading = false;
      this.router.navigate(['/movies'])
    }, err => {
      this.error = err;
      console.log(err);
    })
    form.reset();
  }


}
