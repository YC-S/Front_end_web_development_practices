import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  public title: string = '我是一个新闻组件--ts';

  username: string = '张三';

  public student: string = '这是一个学生的属性';

  public userInfo: object = {
    userName: 'tom',
    age: 20,
  };

  public message: any;

  public content = '<h2>我是一个html 标签</h2>';

  public arr = ['1111', '222', '3333'];

  public list: any[] = ['news 1', 'news 2', 'news 3'];

  public items: Array<number> = [111, 222, 333, 444];

  public userList: any[] = [
    {
      username: '张三',
      age: 20,
    },
    {
      username: '李四',
      age: 21,
    },
    {
      username: '王武',
      age: 40,
    },
  ];

  public cars: any[] = [
    {
      brand: '宝马',
      list: [
        {
          title: 'M1',
          price: '30W',
        },
        {
          title: 'M2',
          price: '40W',
        },
        {
          title: 'M3',
          price: '50W',
        },
      ],
    },
    {
      brand: '奥迪',
      list: [
        {
          title: 'X4',
          price: '30W',
        },
        {
          title: 'X5',
          price: '50W',
        },
        {
          title: 'X6',
          price: '70W',
        },
      ],
    },
  ];
  /*
    声明属性的几种方式

    public

    protected

    private
  */
  constructor() {
    this.message = '这是给属性赋值';
  }

  ngOnInit(): void {}
}
