import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  public title = '我是一个新闻组件--ts';

  constructor() {}

  ngOnInit(): void {}
}
