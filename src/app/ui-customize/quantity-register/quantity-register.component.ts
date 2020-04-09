import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-quantity-register',
  templateUrl: './quantity-register.component.html',
  styleUrls: ['./quantity-register.component.scss']
})
export class QuantityRegisterComponent implements OnInit {

  @Output() count = new EventEmitter();

  private minNum = 0;
  private maxNum = 99;

  public quantity = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(value: string) {
    const quantity = this.quantity;

    if (quantity !== this.maxNum && '+' === value) {
      this.quantity++;
    }
    if (quantity !== this.minNum && '-' === value) {
      this.quantity--;
    }

    this.count.emit(this.quantity);
  }

}
