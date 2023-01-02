import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { QuizComponent } from './pages/quiz/quiz.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, QuizComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
