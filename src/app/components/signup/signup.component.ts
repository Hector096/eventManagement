import { Component, OnInit } from '@angular/core';
import {  Validators,FormBuilder, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { PassWordValidator } from './form-validators';
import {HttpServiceService} from "../../service/http-service.service"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupform:FormGroup
  get naMe(){
    return this.signupform.get('name');
  }
  get eMail(){
    return this.signupform.get('email');
  }
  get passWord(){
    return this.signupform.get('password');
  }
  get cpassWord(){
    return this.signupform.get('password2');
  }
  errorMsg = "";
  successMsg="";

  constructor(private _fb:FormBuilder,public _route:Router, public _httpservice:HttpServiceService) { }

 
  ngOnInit() {
    this.signupform = this._fb.group({
      name:['',Validators.required],
           email: ['',[Validators.required,Validators.email]],
           password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
          password2: [''],
     }, {validator: PassWordValidator});
     
  
  
  }
  signup(){
    // console.log(this.signupform.value)

    this._httpservice.signup(this.signupform.value).subscribe(
      response => {if(response.code==200){this._route.navigate(['/login'])} this.successMsg = response.statusText
      },
      error => this.errorMsg = error.statusText
      // response => console.log(response),
      // error => console.log(error)
      );
    
  }

}
