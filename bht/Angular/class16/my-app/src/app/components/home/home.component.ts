import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public picUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAMAAADU1xmCAAAAUVBMVEX///9mZmZgYGBjY2NbW1tYWFiampr4+Pj09PTq6uqtra3k5ORpaWm6urqSkpLMzMx2dnZwcHCLi4ulpaWAgIDCwsLe3t6zs7NTU1PW1tZISEh9BsfbAAACMUlEQVRYhd2Y23KEIAyGBQKKq6ILnvr+D1qxavcgWaPctLlkhm8CSX4SkuQfmS6rwkRidQ5AQBxaWknBGIMxBkwXnHmTtwiwGxczjA0RYJlYYKKOQGsWGOP9dZjiC4wN6WVYJ1cYV9ddq9dzMnndtdvmmoyQuna9NYhwzi2g/B4BlgyLZ1Fg2UwTMo8Bm2iCg7zHqE9v90q1+vx2PZrWdO+ppU1pre0Nwc1OFRK8cVc+eJQa1Uxr3kAWqjvEGmu5ag8TXNb9D3CsOGzrPlmkO+Cgkg9bFmBubPGyPMf4k5pkNX/d5IGws/o5/zZJPGjgMFpBg+F16/YPhJj4CqZhKz9vf3HNZSFYSoch57TUc4INw8iuoWLXk0OAvRA1MTugRWCaeFBRILCkBRoNf/IV8doAVRBHLSr0lS5oLIHWOzXbRIXRMiINb27+Ey1uFBhaCglZw9HspRY9Xll3Ig2v+pysvJgiGaKGTIbQqPr2IeXIrjFZhmlUgfO48NWduDgW7oTTgU6bHvtQ50DNuNmEtPsifOaok/GAc+QcmWGh9oHciHgbQtWvT8QB0bkTcUAmTHp1oUpSUW8OHX7JrwP+m9HTci4Y0MVIgh7MtdU0wTlczGcjtPlHvqcO6xwgYkm+uoOfGdnOtPW+cvgzQz9t9vNk0xTwNOsyjvYhz9418Iuq83EaplLt5/ANKNFm8NUsgJhI4PrHuN3yn8EeOPYy77lXVk6Z9wlPG6tUe/2f64/bN9ghGHwe5sCWAAAAAElFTkSuQmCC';

  public title: string = '我是一个title';

  public binding: string = '这是默认值';

  public list: any[] = [
    {
      title: '我是第一个新闻',
    },
    {
      title: '我是第二个新闻',
    },
    {
      title: '我是第三个新闻',
    },
  ];

  public flag: boolean = true;

  public orderStatus: number = 2; /*1表示支付 2表示支付并确认*/

  public attr: string = 'blue';

  public today: any = new Date();
  constructor() {
    console.log(this.today);
  }

  ngOnInit(): void {}

  run(): void {
    alert('执行方法');
  }

  getData(): void {
    alert(this.title);
  }

  setData(): void {
    this.title = '我是一个改变后的title';
  }

  runEvent(e) {
    let d: HTMLElement = e.target;
    d.style.color = 'red';
  }

  keyDown(e) {
    if (e.keyCode == 13) {
      console.log('按了一下回车');
    } else {
      console.log(e.target.value);
    }
  }

  keyUp(e) {
    if (e.keyCode == 13) {
      console.log('按了一下回车');
    } else {
      console.log(e.target.value);
    }
  }
  changeBinding() {
    this.binding = '我是改变后的值';
  }

  getBinding() {
    console.log(this.binding);
  }
}
