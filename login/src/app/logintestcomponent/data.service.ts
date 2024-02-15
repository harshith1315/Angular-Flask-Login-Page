import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Method to send form data to Flask
  sendFormData(formData: any) {
    return this.http.post<any>('http://127.0.0.1:5000/api/login', formData);
  }
}