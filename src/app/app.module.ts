import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuListComponent } from './modules/menu-list/menu-list.component';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
import { QuantityRegisterComponent } from './ui-customize/quantity-register/quantity-register.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TableTbody001Component } from './ui-customize/table-tbody001/table-tbody001.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    UiTestComponent,
    QuantityRegisterComponent,
    TableTbody001Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
