import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isVisible = false;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  _onLogout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
  _showModal(): any {
    this.isVisible = true;
  }
  _onOk(): any {
    this._onLogout()
    this.isVisible = false;
  }

  _onCancel(): any {
    this.isVisible = false;
  }
}
