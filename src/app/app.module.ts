import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { TestspecsComponent } from './testspecs/testspecs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TableComponent } from './table/table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableFilterModule } from 'mat-table-filter';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    TestspecsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatTableFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
