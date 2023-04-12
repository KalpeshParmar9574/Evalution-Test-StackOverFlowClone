import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm!:FormGroup
  constructor(private fb: FormBuilder, private userService: UserServiceService,
  private router:Router) { }
  ngOnInit() { this._initForm() }
  _initForm(){
    this.regForm = this.fb.group({
      displayName: new FormControl('', [Validators.required, ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )])
  })
  }

  _submitForm() {
    const body = this.regForm.getRawValue()
    console.log(body);
    if (body) {
      this.userService._userRegister(body).subscribe((res: any) => {
        console.log(res);
        if (res) {
        this.router.navigate(['/front/users/login'])
        }
        
      }, (error) => {
        console.log(error);
        
      })
    }
    
  }
}
