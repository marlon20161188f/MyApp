import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //PUBLICADOR
  totalQuantity: BehaviorSubject<number>=new BehaviorSubject<number>(0)
  totalAmount: BehaviorSubject<number>=new BehaviorSubject<number>(0)

 // totalQuantity: Subject<number>=new Subject<number>()
 // totalAmount: Subject<number>=new Subject<number>()

  cartItems:CartItem[]=[]
  constructor() { }

  addToCart(cartItem:CartItem){
    var exitsItem:CartItem=null
    exitsItem=this.cartItems.find(ci=>ci.id==cartItem.id)
    if(exitsItem==null){
      this.cartItems.push(cartItem)
    }
    else{
      exitsItem.quantity++
    }
    this.computeTotals()
  }
  computeTotals(){
    var totalQuantity:number=0
    var totalAmount:number=0
    this.cartItems.forEach(item=>{
      totalQuantity+=item.quantity
      totalAmount+=item.quantity*item.unitPrice
    })

    this.totalQuantity.next(totalQuantity)
    this.totalAmount.next(totalAmount)
  }

  clearAll(){
    this.cartItems=[]
    this.totalAmount.next(0)
    this.totalQuantity.next(0)
  }
}
