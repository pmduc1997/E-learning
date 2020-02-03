import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  data = [
    {
      key: '1',
      name: 'Mạng máy tính',
      subject:'Cơ sở dữ liệu',
      updatedAt:'2020-17-1'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
