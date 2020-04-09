import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './modules/menu-list/menu-list.component';
import { UiTestComponent } from './modules/ui-test/ui-test.component';


const routes: Routes = [
  {
    path: 'menuList',
    component: MenuListComponent
  },
  {
    path: 'ui',
    component: UiTestComponent
  },
  {
    path: '',
    redirectTo: '/menuList',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/menuList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
