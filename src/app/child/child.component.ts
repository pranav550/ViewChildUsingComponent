import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message:string ='';
  count:number = 0;
  increaseByOne(){
    this.count =this.count + 1 
     this.message = "Counter" + this.count
  } 

  decreaseByOne() {
    this.count = this.count - 1;
    this.message = "Counter: " + this.count;
 }
  constructor() { }

  ngOnInit() {
  }

}
