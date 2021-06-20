import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  getPages(): Array<number> {
    return Array(this.pages + 1).fill(null).map((x,i) => i);
  }
}
