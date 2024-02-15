import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogintestcomponentComponent } from './logintestcomponent/logintestcomponent.component';
import { SucesscomponentComponent } from './sucesscomponent/sucesscomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    LogintestcomponentComponent,
    SucesscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
