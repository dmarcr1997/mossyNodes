import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moss';

  goTo(location){
    let idName = location.split(' ').join('');
    window.location.hash = idName;
  }

  notOnLandingPage(){
    console.log("CHANGE")
    return window.location.pathname !== '/';
  }
}
