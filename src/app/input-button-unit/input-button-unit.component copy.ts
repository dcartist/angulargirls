import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  //Make sure to have backticks for this template
  template: `
    <p>
      input-button-unit works!
    this is the title {{title}}
    </p>
    <!-- <input value="Hello Coffee!"> -->
    <input [value]="title"> <!-- this puts the title inside of the input -->
    <hr>
    <input [value]="generateTitle()">

    {{ generateTitle() }}
    <button>Save</button>
  <hr>
  <p>
  input-button-unit works!
  The title is: {{ title }}
</p>

<input [value]="title">
<!-- instead of onClick it's just click then then method is called -->
<button (click)="changeTitle('I have been clicked!')">
  Save
</button>

<hr>
<input [value]="title" (keyup)="changeTitle('HAHAHAHAH!')">
<hr>
<!-- This is taking the event target and using it for the change Title -->
<!-- Instead of keyup instead of onchange  -->
<p> Changes the input based on the key up:</p>
<input [value]="title"
       (keyup)="changeTitle($event.target.value)">
<p> Changes the input based on the enter key:</p>

<input [value]="title"
       (keyup.enter)="changeTitle($event.target.value)">

<hr>
<p></p>
<input [value]="title"
       (keyup.enter)="changeTitle1($event)">

  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World, Programing is AWESOME';
  constructor() {
    this.title = 'I Love Angular, actually I love programming.';
//Methods are outside of constructor still
  }

  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
    console.log(newTitle);

  }

  changeTitle1(event): void {
    console.log(event);
    this.title = event.target.value; // the original functionality still works
  }





//binding information in another way
  generateTitle(): string {
    return 'This title was generated by a method.';
  }

  ngOnInit() {
    //sets a time out for the change of info
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);

    this.title = 'Angular CLI Rules! Yeah sure okay';
    console.log(this.title);
    this.changeTitle('My First Angular App');
    // Methods >> this.changeTitle is implemented here from building in the constructor earlier

  }

}
