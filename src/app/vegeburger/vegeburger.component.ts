import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegeburger',
  template: `<p class="container fine">VEGEBurger is OK</p>`,
  styles: [
    `	.container {
      background-color: aqua;
      padding: 20px;
      border-radius: 10px;
    }
      .fine {
        color: green;
      }
    `
  ]
})
export class VegeburgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
