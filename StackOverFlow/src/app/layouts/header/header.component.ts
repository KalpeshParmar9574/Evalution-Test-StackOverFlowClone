import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userData:any
  constructor(
    private router:Router
  ) {
  
  }

  ngOnInit() {
 
    this.router.events.subscribe((res) => {
      debugger
      if (res) {
        const data = localStorage.getItem('userData')
        if (data) {
          this.userData = JSON.parse(data)
        }
      }
    })


  }
  
  _navigateToLogin() {
    this.router.navigate(['./front/users/login'])
  }
  _navigateToRegister() {
    this.router.navigate(['./front/users/register'])
  }
}
