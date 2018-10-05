import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WelcomeModule } from 'components/src/lib/welcome/welcome.module';
import { TileModule } from 'components/src/lib/tile/tile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    TileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
