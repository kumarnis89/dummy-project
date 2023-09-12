import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked, OnInit, OnChanges{
  title ?:string;
  parentMessage ?:string;
  user :string = "Rishikesh";

  @ViewChildren(HeaderComponent) complist !: QueryList<any>;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.title = "dummy-project";
    this.parentMessage = "Header works!";
  }

  ngAfterViewChecked(): void {
    this.complist.forEach(x=> x.message = "Hello from Parent");
  }

  catchEmittedValue(event : Event) : void {
    console.log(event);
    this.user = "Nishant";
  }
} 
