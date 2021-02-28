import { Component, OnInit } from '@angular/core';
import * as data from 'src/server/information.json';
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  courses = []

  constructor() {
    this.courses = data.coursework;
    console.log(this.courses);
  }

  ngOnInit(): void {
  }

}
