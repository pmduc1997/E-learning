import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons-add',
  templateUrl: './lessons-add.component.html',
  styleUrls: ['./lessons-add.component.css']
})
export class LessonsAddComponent implements OnInit {
  value: string[] = [];
  nodes = [
    {
      title: 'Đại học',
      key: '1',
      children: [
        {
          title: 'Khoa công nghệ thông tin',
          key: '12',
          children: [
            {
              title: 'Bộ môn Hệ thống thông tin', key: '120',
              children: [
                { title: 'Lập trình cơ bản', key: '1200', isLeaf: true },
                { title: 'Cơ sở dữ liệu', key: '1201', isLeaf: true }
              ]

            },
            {
              title: 'Bộ môn Công nghệ mạng', key: '121',
              children: [
                { title: 'An ninh mạng', key: '1210', isLeaf: true },
                { title: 'Kỹ thuật liên mạng', key: '1211', isLeaf: true }

              ]
            },
          ]
        }
      ]
    }
  ];

  steps = 0;
  constructor() { }

  ngOnInit() {
  }
  onIndexChange(index: number): void {
    this.steps = index;
  }
  onChange($event: string[]): void {
    console.log($event);
  }
}
