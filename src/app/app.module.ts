import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayFieldComponent } from './play-field/play-field.component';
import { PlayerComponent } from './player/player.component';
import { StartPadgeComponent } from './start-padge/start-padge.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: StartPadgeComponent },
  { path: 'play-field', component: PlayFieldComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayFieldComponent,
    PlayerComponent,
    StartPadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
