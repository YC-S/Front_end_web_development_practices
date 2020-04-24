import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title: string = 'Angular';
  getTitle(): string {
    return this.title + ' course lists';
  }
  courses: string[] = ['基本原理', '开发工作流', '配置'];
  course: string = 'Abc';
  text: string = 'abcdefghijklmn';

  constructor() {}

  ngOnInit(): void {}
}
