import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { PlayComponent } from './play/play.component';
import {GameService} from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
