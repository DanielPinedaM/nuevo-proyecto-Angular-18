import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import path from '../types/constants/const-path';
import { objSessionStorage } from '../types/constants/const-session-storage';
import { sessionStorageSearch } from '../utils/func/sessionStorage';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
      private router: Router
    ) { }

    canActivate(): boolean {
        if (sessionStorageSearch(objSessionStorage.token!)) {
            return true;
        } else {
            this.router.navigate(['/' + path.login.login]);
            return false;
        }
    }
}
