import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  @Input()
  pages: number = 0;

  @Input()
  actualPage: number = 0;

  @Output()
  event = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
  }

  getPages(): Array<number> {
    return Array(this.pages).fill(null).map((x,i) => i);
  }

  emitEvent(value: number): void {
    this.event.emit(value);
  }
}

