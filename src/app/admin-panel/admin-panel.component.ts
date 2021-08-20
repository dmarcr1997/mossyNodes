import { Component, OnInit } from '@angular/core';
import { crud } from '../../server/createRead.js';
import { Project } from '../Project.js';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  projects
  coursework
  projectInput
  courseInput 
  itemName = ""
  repo = ""
  img = ""
  gi = ""
  classname = ""
  file = ""
  selectedForm
  //create admin panel to create projects and coursework from data
  constructor() {
    this.projectInput = {
      name: "",
      repo: "",
      img: "",
      gi: ""
    }
    this.courseInput = {
      name: "", 
      classname: "", 
      date: "",
      file: ""
    }
    this.selectedForm = "P"
  }

  ngOnInit(): void {
    
  }

  newProject(){
    console.log(this.itemName)
  }

  newCourse(){

  }

  saveToDB(){

  }

  selectedFormType(val){
    this.selectedForm = val;
  }

}
