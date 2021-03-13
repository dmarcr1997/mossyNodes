import { Component, OnInit } from '@angular/core';
import * as data from 'src/server/information.json';
@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  projects
  DEV_TO_URL
  blogs
  constructor(){ 
    this.projects = data.projects
  }

  ngOnInit(): void {
    this.DEV_TO_URL = "https://dev.to/api/articles"
    fetch(this.DEV_TO_URL + '?username=dmarcr1997')
    .then(res => res.json())
    .then(data => this.saveBlogs(data))
    .catch(error => console.log("WE HAVE FETCH POST ERROR", error))
  }

  
  saveBlogs(data) {
    console.log('Done');
    this.blogs = data;
    console.log(this.blogs);
  }

}
