import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContentPageComponent } from './components/all-content-page/all-content-page.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'courses', component: CoursePageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'all', component: AllContentPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
