import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from "@angular/common/http";
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { UploadJsonComponent } from './upload-json/upload-json.component';
import { StatComponent } from './stat/stat.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FilteredListComponent } from './filtered-list/filtered-list.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';
import { CashflowComponent } from './analyzer/cashflow/cashflow.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadJsonComponent,
    StatComponent,
    TransactionViewComponent,
    TransactionListComponent,
    NavComponent,
    HomeComponent,
    FilteredListComponent,
    AnalyzerComponent,
    CashflowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgChartsModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
