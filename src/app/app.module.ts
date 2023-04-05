import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './small/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { QheaderComponent } from './small/qheader/qheader.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { QfooterComponent } from './small/qfooter/qfooter.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { OptionComponent } from './small/option/option.component';
import { RatingIconsComponent } from './small/rating-icons/rating-icons.component';
import { AddOpStateComponent } from './small/add-op-state/add-op-state.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormHeaderFrontComponent } from './form-header/form-header-front/form-header-front.component';
import { FormHeaderBackComponent } from './form-header/form-header-back/form-header-back.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    QheaderComponent,
    QfooterComponent,
    OptionComponent,
    RatingIconsComponent,
    AddOpStateComponent,
    FormHeaderComponent,
    FormHeaderFrontComponent,
    FormHeaderBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
