import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, AfterViewChecked {
  @ViewChild('messages') private messages?: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.scrooooooool();
  }

  ngAfterViewChecked(): void {
    this.scrooooooool();
  }

  scrooooooool(): void {
    if (this.messages) {
      this.messages.nativeElement.scrollTop = this.messages.nativeElement.scrollHeight;
    }
  }
}
