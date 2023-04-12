import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm !: FormGroup
  userData!: any
  LogginFails:boolean = false
  constructor(private formBuilder: FormBuilder,
    private userService: UserServiceService,
  private router:Router) {
   
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  this.initLoginForm()
  }
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
      ])
    });
  }


  _loginUser() {
    const body = this.loginForm.getRawValue()
    console.log(body);
    debugger
    this.userService._userLogin().subscribe((res) => {
      this.userData = res
      this.userData.forEach((item:any) => {
        if (item.email == body.username && item.password == body.password) {
          localStorage.setItem('userData', JSON.stringify(item))
          this.router.navigate(['/home'])
        } 
      });
      this.LogginFails=true
     
    })
  
    
  }
}