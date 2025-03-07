import { Component } from '@angular/core';
import { Router } from '@angular/router';
import path from '../../../types/constants/const-path';

@Component({
  selector: 'app-error-404-non-existent-path',
  templateUrl: './error-404-non-existent-path.component.html',
})
export class Error404NonExistentPathComponent {
  currentRoute: string = "";

  constructor(
    private router: Router
  ) {
    this.currentRoute = this.router.url;
  }

  onClickLogout = (): Promise<boolean> => this.router.navigate(['/' + path.auth.login]);
}
