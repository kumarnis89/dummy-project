import { AfterContentInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, AfterContentInit{
  @Input() headerMessage ?: string;
  @Input() message ?: string;
  @Input() user ?:string;

  @Output() valueEmitter : EventEmitter<any> = new EventEmitter<any>();

  constructor(){}
  ngAfterContentInit(): void {
    console.log('AfterContentInit called as result of content projection');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['user']){
      console.log(changes['user'].previousValue + ' changed to ' + changes['user'].currentValue);
    }
  }

  emitValue() : void {
    this.valueEmitter?.emit("Button clicked in header component");
  }
}
