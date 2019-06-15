import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from 'src/app/services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder, private signInservice : SigninService, private route : Router) { }
  signInForm: FormGroup;
  isError : boolean = false;

  ngOnInit() {
    // formbuilder validation initializarion
    this.signInForm = this.fb.group({
      'userName' : ['', Validators.required],
      'password' : ['', Validators.required]
    })
  }

  // validation
  get userName(){
    return this.signInForm.controls.userName
  }
  get password(){
    return this.signInForm.controls.password
  }

  // signup submit function
  submit(values){
    this.signInservice.signin(values).subscribe(res=>{
      if(res.length >0){
        localStorage.setItem('token', res[0].token)
        localStorage.setItem('user_details', JSON.stringify(res))
        this.route.navigate(['/pages/dashboard'])
      }
      else this.showMessage()
    },err=>{
      this.showMessage()
    })
  }

  // function to show messages
  showMessage(){
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 2000);
  }

}
