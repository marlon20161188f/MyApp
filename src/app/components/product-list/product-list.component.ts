import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  
  constructor(private productService:ProductService,private router:ActivatedRoute,
     private cartService:CartService) { }
  ngOnInit(): void {
    this.router.paramMap.subscribe(()=>{
      this.procesar()
  })
  }

procesar(){
  if(this.router.snapshot.paramMap.has('id')){
    const idCategoria:number=+this.router.snapshot.paramMap.get('id')
    this.productService.getProductsByCategory(idCategoria).subscribe(res=>this.products=res)
  }
  else{
    this.productService.getProducts().subscribe(res=>this.products=res)
  }
}
addToCart(product:Product){
  var carItem:CartItem = new CartItem(product)
  this.cartService.addToCart(carItem)
  console.log("entro")
}
}