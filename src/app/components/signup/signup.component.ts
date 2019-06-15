import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from 'src/app/services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private signInservice : SigninService, private router : Router) { }
  signUpForm: FormGroup;
  isSuccess : boolean = false;
  isError : boolean = false;

  ngOnInit() {
    // formbuilder validation initializarion
    this.signUpForm = this.fb.group({
      'fullname' : ['', Validators.required],
      'email' : ['', [Validators.email,Validators.required]],
      'userName' : ['', Validators.required],
      'password' : ['', Validators.required]
    })
  }

  // validation
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

  // signup submit function
  submit(values){
    console.log(values)
    this.signInservice.signup(values).subscribe(res=>{
      if(res['msg'] == 'saved') {
        this.signUpForm.reset();
        this.showMessage('success')
      }
      else this.showMessage('error')
    },err=>{
      this.showMessage('error')
    })
  }

  // function to show success and error messages
  showMessage(param){
    if(param == 'success'){
      this.isSuccess = true;
      setTimeout(() => {
        this.isSuccess = false;
        this.router.navigate(['/signin'])
      }, 2000);
    }
    else{
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 2000);
    }
  }

}
