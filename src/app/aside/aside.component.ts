import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../Project';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  
  @Input() title: string = 'Damon';
  @Input() title2: string;
  @Input() titles;
  @Input() items;
  @Input() content: string = 'Class notes, Projects, Blog Posts';
  @Input() projects;
  @Input() otherWork; 
  @Input() page;
  githubLink: string = 'https://github.com/dmarcr1997';
  constructor() {}

  ngOnInit(): void {
  }


  // getHref = (id) => {
  //   if(this.page == 2)
  //     return `/portfolio#${id}`
  //   else if (this.page == 3)
  //     return `/all${id}`
  // }
  goTo(location){
    let idName = location.split(' ').join('')
    console.log(idName)
    window.location.hash = idName
  }

}
