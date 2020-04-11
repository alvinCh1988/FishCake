import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public orderList = [
    { name: '原味', price: 45, quantity: 0, amount: 0, color: 'chocolate' },
    { name: '巧克力', price: 50, quantity: 0, amount: 0, color: 'black' },
    { name: '草莓', price: 50, quantity: 0, amount: 0, color: 'red' },
    { name: '抹茶', price: 50, quantity: 0, amount: 0, color: 'green' },
    { name: '黑糖', price: 50, quantity: 0, amount: 0, color: 'Brown' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
