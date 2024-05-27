import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  clickevent(){
    console.log("dasf");
    this
  }

}
