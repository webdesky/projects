import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MyService } from '../my.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  login : any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myservices : MyService
    ) {}

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
          password: ['', Validators.required]
      });

      // this.authenticationService.logout();
}


get f() { return this.loginForm.controls; }

onSubmit() {
  debugger
this.myservices.Login(this.loginForm.value)
.subscribe(res=>{
  this.login = res
  this.login.data.user.username
 

  localStorage.setItem('data', this.login.data.user.username);
  console.log(localStorage.getItem('data'));
   debugger
  console.log(res)
  this.router.navigate(['/index']); 
})


}




}
