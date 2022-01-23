import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadJsonComponent } from './upload-json/upload-json.component';
import { StatComponent } from './stat/stat.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadJsonComponent,
    StatComponent,
    TransactionViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
