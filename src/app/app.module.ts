import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SelectedListComponent } from './selected-list/selected-list.component';
import { FruitService } from './services/fruit.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SelectedListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FruitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
