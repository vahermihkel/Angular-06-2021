import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ItemAddComponent } from './admin/item-add/item-add.component';
import { ItemEditComponent } from './admin/item-edit/item-edit.component';
import { ItemsViewComponent } from './admin/items-view/items-view.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ViewItemComponent } from './home/view-item/view-item.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ostukorv", component: CartComponent },
  { path: "toode/:itemId", component: ViewItemComponent },
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/lisa-ese", component: ItemAddComponent },
  { path: "admin/muuda-eset/:itemId", component: ItemEditComponent },
  { path: "admin/vaata-esemeid", component: ItemsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
