import { Component, OnInit } from '@angular/core';
import * as data from 'src/server/information.json';
@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  projects

  constructor(){ 
    this.projects = data.projects
    console.log(this.projects[0]);
  }

  ngOnInit(): void {
  }

}
