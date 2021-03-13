import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-content-page',
  templateUrl: './all-content-page.component.html',
  styleUrls: ['./all-content-page.component.css']
})
export class AllContentPageComponent implements OnInit {
  selectOptions = [
    {value: 'C', label: 'Class'}, 
    {value: 'D', label: 'Date'}, 
    {value: 'A', label: 'Alpha'},
    {value: 'P', label: 'Projects'},
    {value: 'S', label: 'School Work'},
    {value: 'B', label: 'Blogs'}
  ];

  currentOption: string;
  DEV_TO_URL: string;
  content = [];
  blogs;
  projects;
  courses;
  constructor() { }

  selectSort(val){
    this.currentOption = val
    this.getContent();
  }

  getContent(){
    switch(this.currentOption){
      case 'S':
        this.content = [...this.courses];
        break;
      case 'P':
        this.content = [...this.projects];
        break;
      case 'B':
        this.content = [...this.blogs];
        break;
      default:
        this.content = [...this.blogs, ...this.projects, ...this.courses];
    }
  }

  saveBlogs(data) {
    console.log('Done');
    this.blogs = data;
    console.log(this.blogs);
  }

  ngOnInit(): void {
    this.currentOption = ''
    this.DEV_TO_URL = "https://dev.to/api/articles"
    fetch(this.DEV_TO_URL + '?username=dmarcr1997')
    .then(res => res.json())
    .then(data => this.saveBlogs(data))
    .catch(error => console.log("WE HAVE FETCH POST ERROR", error))
    
  }

}
