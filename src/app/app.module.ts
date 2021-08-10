import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ItemAddComponent } from './admin/item-add/item-add.component';
import { ItemEditComponent } from './admin/item-edit/item-edit.component';
import { ItemsViewComponent } from './admin/items-view/items-view.component';
import { ViewItemComponent } from './home/view-item/view-item.component';
import { ItemPricePipe } from './pipes/item-price.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { CategoryComponent } from './admin/category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CarouselSettingsComponent } from './admin/carousel-settings/carousel-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    AdminHomeComponent,
    ItemAddComponent,
    ItemEditComponent,
    ItemsViewComponent,
    ViewItemComponent,
    ItemPricePipe,
    ShortenTitlePipe,
    CategoryComponent,
    CarouselComponent,
    CarouselSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
