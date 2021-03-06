import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/ListResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44338/api/categories/getall'
  
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<listResponseModel<Category>> {
    return this.httpClient.get<listResponseModel<Category>>(this.apiUrl);
  }

  
}
