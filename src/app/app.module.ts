import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentLvComponent } from './countdown-parent-lv/countdown-parent-lv.component';
import { CountdownParentVcComponent } from './countdown-parent-vc/countdown-parent-vc.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    CountdownParentLvComponent,
    CountdownParentVcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
