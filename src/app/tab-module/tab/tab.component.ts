import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterContentInit{
  @ContentChild('header') tabHeaders : ElementRef = { nativeElement : undefined};

  ngAfterContentInit(): void {
    console.log('printing...');
    // once we get hold of nativeElement, we can modify contents
    this.tabHeaders.nativeElement.style.color = "blue";
    console.log(this.tabHeaders);
  }
}
