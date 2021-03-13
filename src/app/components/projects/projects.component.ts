import { Component, OnInit } from '@angular/core';
import * as data from 'src/server/information.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects
  constructor() { }

  ngOnInit(): void {
    this.projects = data.projects
  }

}
