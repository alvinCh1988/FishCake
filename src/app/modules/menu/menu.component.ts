import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public modalRef: BsModalRef;
  public totalAmount = 0;

  public menuList = [
    { name: '原味', price: 45, quantity: 0, amount: 0 },
    { name: '巧克力', price: 50, quantity: 0, amount: 0 },
    { name: '草莓', price: 50, quantity: 0, amount: 0 },
    { name: '抹茶', price: 50, quantity: 0, amount: 0 },
    { name: '黑糖', price: 50, quantity: 0, amount: 0 },
  ];

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  public addCount(name: string, quantity: number) {
    this.menuList.forEach(x => {
      if (name === x.name) {
        x.quantity = quantity;
        x.amount = x.price * quantity;
      }
    });
  }

  public confirmQuantity(template: any) {
    this.sumAmount();
    this.modalRef = this.modalService.show(template);
  }

  public sumAmount() {
    this.totalAmount = 0;
    this.menuList.forEach(x => {
      this.totalAmount += x.amount;
    });
  }


}
