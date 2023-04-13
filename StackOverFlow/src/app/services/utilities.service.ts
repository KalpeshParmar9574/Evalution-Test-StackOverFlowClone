import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  baseURL = environment.baseURL
  qURL = environment.Questions
  
  constructor(private http: HttpClient) { }
  
  _postQuestion(data: any) {
    try {
      return  this.http.post<any>(this.baseURL+this.qURL,data)
    } catch (error:any) {
      return throwError(() => {
        new Error(error)
      })
    }
  
  }

  _getQuetions(){
     try {
      return this.http.get<any>(this.baseURL+this.qURL)
     } catch (error:any) {
      return throwError(() => {
        new Error(error)
      })
     } 
  }
  
}
