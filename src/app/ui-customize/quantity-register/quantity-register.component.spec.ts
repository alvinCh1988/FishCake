import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityRegisterComponent } from './quantity-register.component';

describe('QuantityComponent', () => {
  let component: QuantityRegisterComponent;
  let fixture: ComponentFixture<QuantityRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuantityRegisterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
