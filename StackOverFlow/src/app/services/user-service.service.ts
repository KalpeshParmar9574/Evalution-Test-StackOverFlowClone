import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseURL = environment.baseURL
  userURL = environment.users
  constructor(private http: HttpClient) { }
  _userLogin() {
    try {
      return this.http.get<any>(this.baseURL+this.userURL)
    } catch (error:any) {
      return throwError(() => {
        new Error(error)
      })
    }
  }

  _userRegister(data: any) {
    try {
      return this.http.post<any>(this.baseURL+this.userURL,data)
    } catch (error:any) {
      return throwError(() => {
        new Error(error)
      })
    }
  }
}
