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
  constructor() { }

  selectSort(val){
    this.currentOption = val
  }

  ngOnInit(): void {
    this.currentOption = ''
  }

}
