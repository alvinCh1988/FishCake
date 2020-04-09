import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTbody001Component } from './table-tbody001.component';

describe('TableTbody001Component', () => {
  let component: TableTbody001Component;
  let fixture: ComponentFixture<TableTbody001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTbody001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTbody001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
