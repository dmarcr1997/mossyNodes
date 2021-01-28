import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { AllContentPageComponent } from './components/all-content-page/all-content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    PortfolioPageComponent,
    CoursePageComponent,
    ResumePageComponent,
    AllContentPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
