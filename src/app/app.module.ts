import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { List2Component } from './list2/list2.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ListComponent,
    List2Component,
    AddComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
