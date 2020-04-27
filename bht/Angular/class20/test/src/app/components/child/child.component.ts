import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() parentData: number;
  @Output() childEvent = new EventEmitter();

  constructor() {}
  onChange(value) {
    this.childEvent.emit(value);
  }

  ngOnInit(): void {}
}
