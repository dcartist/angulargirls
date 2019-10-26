import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ThisTestComponent } from './this-test/this-test.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
/*
@NgModule({...}) is a decorator. A decorator is just a function. When using it we put @ before its name. This way it becomes a decorator: it looks at what is written right after the function call and receives it as an argument. Decorators usually do something with what they decorate. For example, in this case NgModule receives the AppModule class and adds to it methods and members that later on will be used by Angular. This way Angular will recognize that this class represents an NgModule.

 */

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    InputButtonUnitComponent,
    ThisTestComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
