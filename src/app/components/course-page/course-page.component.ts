import { Component, OnInit } from '@angular/core';
import * as data from 'src/server/information.json';
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  courses = []
  headings = []
  constructor() {
  }

  ngOnInit(): void {
    this.courses = data.coursework;
    this.headings = [...new Set(this.courses.map(item => item.date))];
  }

  getId(name) {
    let idName = name.split(' ').join('')
    return idName
  }

}

