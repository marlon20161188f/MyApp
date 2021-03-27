import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
trackingNumber:String=''
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.trackingNumber= this.route.snapshot.paramMap.get('id')
  }

}
