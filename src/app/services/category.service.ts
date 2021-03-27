import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../common/category';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private httpClient:HttpClient) { }

  
  getCategories():Observable<Category[]>{
    return this.httpClient.get<getResponseCategory>(environment.uriCategory).pipe(
      map(res=>res._embedded.categories)
    )
  }
}

interface getResponseCategory{
  _embedded:{
    categories:Category[]
  }
}
