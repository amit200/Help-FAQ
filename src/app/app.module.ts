import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TabComponent } from './tab/tab.component';
import{ MatIconModule} from '@angular/material/icon'
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


import { FAQComponent } from './faq/faq.component';
import { HelpVideoComponent } from './help-video/help-video.component';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
   
    
    FAQComponent,
    HelpVideoComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
