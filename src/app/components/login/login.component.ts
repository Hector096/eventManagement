import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router} from '@angular/router'
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
   get eMail(){
    return this.loginForm.get('email');
}
get passWord(){
  return this.loginForm.get('password');
}
errorMsg="";
successMsg="";
isLoginError= false;
  constructor(private _fb:FormBuilder, public route:Router, public _httpservice:HttpServiceService) { }
 
  
  ngOnInit() {
    
    this.loginForm = this._fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
   });
  
  }
  
  login(){
              // console.log(this.loginForm.value);        
    this._httpservice.login(this.loginForm.value).subscribe(
        response => {if(response.code==200){this.route.navigate(['/dashboard'])}}
          ,
        error => this.errorMsg = error.statusText
        // response=>console.log(response),
        // error=>console.log(error)        
        );
          }

}
