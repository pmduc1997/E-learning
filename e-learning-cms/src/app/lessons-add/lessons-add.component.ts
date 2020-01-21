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
          title: 'Khoa cơ khí',
          key: '11',
          children: [
            { title: 'leaf 1-0-0', key: '110', isLeaf: true },
            { title: 'leaf 1-0-1', key: '111', isLeaf: true }
          ]
        },
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
            { title: 'Bộ môn Khoa học máy tính', key: '121' },
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

}
