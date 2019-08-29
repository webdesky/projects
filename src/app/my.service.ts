import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }

Login(data){
  debugger
  console.log("+++++++++++++_+_",data)
  return this.http.post('http://localhost:5000/authenticate', data)
}


}
