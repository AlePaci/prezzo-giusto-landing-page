import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationObject } from '../models/validation.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationApiService {

  apiKey: string = "4acce3dc925346d49998bc3807420e77"

  constructor(private http:HttpClient) { }

  getValidtion(number:string){
    return this.http.get<ValidationObject>(`https://phonevalidation.abstractapi.com/v1/?api_key=${this.apiKey}&phone=${number}`);
  }
}