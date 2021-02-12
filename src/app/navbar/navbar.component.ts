import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemClass = ['nav-item', 'nav-item', 'nav-item', 'nav-item', 'nav-item'];
  item1 = this.itemClass[0];
  item2 = this.itemClass[1];
  item3 = this.itemClass[2];
  item4 = this.itemClass[3];
  item5 = this.itemClass[4];
  constructor() { }

  ngOnInit(): void {
  }

  navClick(activeNumber): void{
    this.itemClass.map((value, index) => {
      if(index === activeNumber){
        value = 'nav-item active'
      }
      value = 'nav-item'
    })
  }
}
