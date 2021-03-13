import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  DEV_TO_URL: string;
  blogs;
  constructor() { }

  ngOnInit(): void {
    this.DEV_TO_URL = "https://dev.to/api/articles";
    fetch(this.DEV_TO_URL + '?username=dmarcr1997')
    .then(res => res.json())
    .then(data => this.saveBlogs(data))
    .catch(error => console.log("WE HAVE FETCH POST ERROR", error));
  }

  saveBlogs(data) {
    this.blogs = data;
  }

}
