import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  
  title: string = 'Damon';
  content: string = 'Class notes, Projects, Blog Posts';

  constructor() {
  }

  ngOnInit(): void {
  }

}
