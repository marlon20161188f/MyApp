import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.getBaseProduct(environment.uriProduct)
  }
  getProductsByCategory(id:number):Observable<Product[]>{
    var urlFiltro=environment.uriProductsByCategory +"?id="+id
    return this.getBaseProduct(urlFiltro)
    
  }
  getBaseProduct(url:string):Observable<Product[]>{
    return this.httpClient.get<getResponseProduct>(url).pipe(
      map(res=>res._embedded.products))
  }
}
interface getResponseProduct {
  _embedded:{
    products:Product[]
  }
}
