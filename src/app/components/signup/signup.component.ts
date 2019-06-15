import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private signInservice : SigninService) { }
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'fullname' : ['', Validators.required],
      'email' : ['', Validators.required],
      'userName' : ['', Validators.required],
      'password' : ['', Validators.required]
    })
  }

  get fullname(){
    return this.signUpForm.controls.fullname
  }
  get email(){
    return this.signUpForm.controls.email
  }
  get userName(){
    return this.signUpForm.controls.userName
  }
  get password(){
    return this.signUpForm.controls.password
  }

  submit(values){
    console.log(values)
    this.signInservice.signup(values).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

}
