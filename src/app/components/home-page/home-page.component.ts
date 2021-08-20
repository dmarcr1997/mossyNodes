import { Component, OnInit } from '@angular/core';
import { skills } from '../../../server/skills.js'; 
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newContent = ['ha'];
  skillsArr;
  bio = "Hi, my name is Damon Rocha and I am a curious programmer. I started coding with C++ in college in an elective class. After finishing this class I found myself really enjoying the challenges coding presented. So I changed my degree plan to computer science and completed my degree in 2019. I then decided to go to Flatiron to hone my craft. Now that I have completed this Bootcamp I am experienced in Ruby on Rails and JavaScript-based programming with a background in C++ and Python. I love to build projects that work with numbers, technology, algorithms, or anything that just makes life better. Due to the amount of math I took in college, I have a detailed Advanced Math, Calculus, and Physics background centered around electronics and science. As far as my soft skills go, I possess strong skills in team-building and project management that I gained while working at UPS and as a supervisor at Kohls. Thanks for reading my about me. If you have any further questions you can contact me via email. Thank you.";
  constructor() {
    this.skillsArr = skills;
  }

  ngOnInit(): void {
  }

}
