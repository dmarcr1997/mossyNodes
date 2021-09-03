import { Component, OnInit } from '@angular/core';
import * as data from 'src/server/information.json';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

  courses = []

  constructor() { }

  ngOnInit(): void {
    this.courses = data.coursework;
  }

  getId(name) {
    let idName = name.split(' ').join('')
    return idName
  }

}
