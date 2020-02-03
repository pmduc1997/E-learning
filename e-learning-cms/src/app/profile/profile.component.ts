import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any = {
    fullname: 'Tạ Minh Thanh',
    birth: '01-08-1997',
    gender: 'male',
    emailHV: 'taminhthanh@mta.edu.vn',
    email: 'taminhthanh@gmail.com',
    avatar:'http://fit.mta.edu.vn/Images/Portraits/Thanh(2019427179).jpg'
  }
  profileForm: any;
  dataSubmit: any;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      fullname: new FormControl({ value: this.data.fullname, disabled: false }),
      birth: new FormControl({ value: this.data.birth, disabled: false }),
      gender: new FormControl({ value: this.data.gender, disabled: false }),
      emailHV: new FormControl({ value: this.data.emailHV, disabled: false }),
      email: new FormControl({ value: this.data.email, disabled: false }),
      avatar: new FormControl({ value: this.data.avatar, disabled: false }),
    });
  }

  _onSubmit() {
    this.dataSubmit = this.profileForm.value
    console.log(this.dataSubmit)
  }
  _onUploadImg(){
    $('.uploadImg').click()
  }

}
