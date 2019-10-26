import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
title = "boss bitch";
  constructor() {
    this.title = 'I Love Angular';

  }

  ngOnInit() {
  }

}
