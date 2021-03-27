import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  
  cartItems:CartItem[]=[]
  totalAmount:number

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  this.cartItems=this.cartService.cartItems
  this.cartService.totalAmount.subscribe(res=>this.totalAmount=res)
}

}
