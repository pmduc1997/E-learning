import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lessons-add',
  templateUrl: './lessons-add.component.html',
  styleUrls: ['./lessons-add.component.css']
})
export class LessonsAddComponent implements OnInit {
  value: string[] = [];
  subjects = [
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
  ]

  profileForm: any;
  data = {
    name: '',
    image: 'https://cafefcdn.com/thumb_w/650/2020/1/4/criptomoedas-01-2869-1562141554-15781308700851407088675-crop-1578805366512246274309.png',
    description: '',
    subject: '',
    sections: [
      {
        name: '',
        curriculums: [
          {
            name: '',
            type: 'video',
          },
        ]
      },
    ]
  }
  steps = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: new FormControl({ value: this.data.name, disabled: false }),
      image: new FormControl({ value: this.data.image, disabled: false }),
      description: new FormControl({ value: this.data.description, disabled: false }),
      subject: new FormControl({ value: this.data.subject, disabled: false }),
    });
  }

  //steps function
  _onStepChange(index: number): void {
    this.steps = index;
  }
  pre(): void {
    this.steps -= 1;
  }

  next(): void {
    this.steps += 1;
  }
  done(): void {
    console.log(this.data);
  }
  //tree view function
  _onTreeChange($event: string[]): void {
    console.log($event);
  }
  //section curriculum function
  _onSectionAdd() {
    let section: any = {
      name: '',
      curriculums: [
        {
          name: '',
          type: 'video',
        },
      ]
    }
    this.data.sections.push(section)
  }
  _onCurriculumAdd(i: any) {
    let curriculum: any = {
      name: '',
      type: 'video'
    }
    this.data.sections[i].curriculums.push(curriculum)
  }
  _onSectionRemove(i) {
    this.data.sections.splice(i, 1)

  }
  _onCurriculumRemove(i, j) {
    this.data.sections[i].curriculums.splice(j, 1)
  }
  //

  _test() {
    console.log(this.data)
  }
}
