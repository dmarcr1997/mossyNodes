import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { AllContentPageComponent } from './components/all-content-page/all-content-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, NgForm} from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PapersComponent } from './components/papers/papers.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    PortfolioPageComponent,
    CoursePageComponent,
    AllContentPageComponent,
    NavbarComponent,
    AsideComponent,
    ProjectsComponent,
    BlogsComponent,
    PapersComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
