import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/common/address';
import { CartItem } from 'src/app/common/cart-item';
import { Customer } from 'src/app/common/customer';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customer: Customer = new Customer();
  shippingAddress: Address = new Address();
  billingAddress: Address = new Address();

  totalQuantity: number = 0
  totalAmount: number = 0
  cartItems: CartItem[] = []

  constructor(private cartService: CartService,
    private checkoutService:CheckoutService,
    private router:Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems
    this.cartService.totalAmount.subscribe(res => this.totalAmount = res)
    this.cartService.totalQuantity.subscribe(res => this.totalQuantity = res)
  }
  placeOrder() {
    var order: Order = new Order();
    order.totalPrice = this.totalAmount
    order.totalQuantity = this.totalQuantity
    var orderItems: OrderItem[] = []
    this.cartService.cartItems.forEach(ci=>{
      var oi:OrderItem=new OrderItem(ci)
      orderItems.push(oi)
    })

    var purchase:Purchase=new Purchase()
    purchase.customer=this.customer
    purchase.shippingAddress=this.shippingAddress
    purchase.billingAddress=this.billingAddress
    purchase.order=order
    purchase.orderItems=orderItems

    this.checkoutService.placeOreder(purchase).subscribe({
      next:res=>{
        this.cartService.clearAll()
        this.router.navigateByUrl('/place-order/'+res.trackingNumber)
    },
      error:err=>{console.log(err);
      }
    }
     
    )
  }
}
