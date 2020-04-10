import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiTestComponent } from './modules/ui-test/ui-test.component';
import { MenuComponent } from './modules/menu/menu.component';
import { OrderComponent } from './modules/order/order.component';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'ui',
    component: UiTestComponent
  },
  {
    path: '',
    redirectTo: '/order',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/order',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
