import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { SubinputsComponent } from './components/subinputs/subinputs.component';
import { ViewSubinputsComponent } from './components/view-subinputs/view-subinputs.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SubinputsComponent,
    ViewSubinputsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
