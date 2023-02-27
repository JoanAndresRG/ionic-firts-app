import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit(): void {
      
    let number: number = 10;
    // debugger;
    number = number * 2;
    number = 150;
    number = number / 3;
    console.log(`Number is : ${number}`);
    }

}
