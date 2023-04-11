import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

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
import { ChoiceComponent } from './components/choice/choice.component';
import { TextComponent } from './components/text/text.component';
import { RatingComponent } from './components/rating/rating.component';
import { DateComponent } from './components/date/date.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ChoiceFrontComponent } from './components/choice/choice-front/choice-front.component';
import { ChoiceBackComponent } from './components/choice/choice-back/choice-back.component';
import { TextBackComponent } from './components/text/text-back/text-back.component';
import { TextFrontComponent } from './components/text/text-front/text-front.component';
import { DateFrontComponent } from './components/date/date-front/date-front.component';
import { DateBackComponent } from './components/date/date-back/date-back.component';
import { RankingBackComponent } from './components/ranking/ranking-back/ranking-back.component';
import { RankingFrontComponent } from './components/ranking/ranking-front/ranking-front.component';
import { RatingFrontComponent } from './components/rating/rating-front/rating-front.component';
import { RatingBackComponent } from './components/rating/rating-back/rating-back.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

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
    FormHeaderBackComponent,
    ChoiceComponent,
    TextComponent,
    RatingComponent,
    DateComponent,
    RankingComponent,
    ChoiceFrontComponent,
    ChoiceBackComponent,
    TextBackComponent,
    TextFrontComponent,
    DateFrontComponent,
    DateBackComponent,
    RankingBackComponent,
    RankingFrontComponent,
    RatingFrontComponent,
    RatingBackComponent
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
    MatSlideToggleModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
