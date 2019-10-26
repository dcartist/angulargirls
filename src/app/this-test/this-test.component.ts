import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-this-test',
  template: `
    <p>
      this-test works!
    </p>
    <p>This is the tester app created using this </p>
  `,
  styleUrls: ['./this-test.component.css']
})
export class ThisTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
