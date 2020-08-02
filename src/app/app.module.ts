import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodSearchPipe } from './food-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodMenuComponent,
    FoodItemComponent,
    FoodSearchPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ScrollingModule,
  ],
  providers: [ScrollDispatcher],
  bootstrap: [AppComponent],
})
export class AppModule {}
