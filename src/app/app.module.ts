import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { IndexComponent } from './index/index.component';
import {AppRoutes} from './route/route.module';
import { CardByIdComponent } from './card-by-id/card-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    LoadingComponent,
    IndexComponent,
    CardByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes,
  ],
  exports: [
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
