import DataTypeClass from '@/app/utils/class/DataTypeClass';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import path from '../../types/constants/const-path';
import {
  sessionStorageDeleteAll,
  sessionStorageSaveAndUpdate,
} from '../../utils/func/sessionStorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  showPassword: boolean = true;

  formLogin = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private router: Router) {}

  ngOnInit() {
    sessionStorageDeleteAll();
  }

  onSubmitLogin(): void {
    if (this.formLogin.invalid) return;

    const { user, password } = this.formLogin.value;

        /* const { success, message, data } = await this.httpService.request(
      'POST',
      environment.auth.login,
      { body: this.formLogin.value }
    );

    if (success) {
      this.setSessionStorage(data);
      this.router.navigate(data.initRoute);
    } else {
      console.error(message);
    } */

    console.log('enviando peticion a ', environment.auth.login);

    const data = {
      token: 'hola mundo',
      username: 'Yeison Alvarez Balvin',
    };

    this.setSessionStorage(data);
    this.router.navigate(['/' + path.home.home + '/' + path.home.bots]);
  }

  setSessionStorage(data: { [key: string]: any }): void {
    if (!data || DataTypeClass.literalObjectLength(data) <= 0) {
      console.error(
        '❌ error, NO se puede setear el Session Storage porque la api NO ha respondido con los datos para guardar',
        '\n',
        data
      );

      return;
    }

    Object.entries(data).forEach((entry) => {
      const [key, value] = entry;

      if (!key || !value) {
        console.error(
          '❌ error, en la data q responde el back al loguearse alguna key o value es falsy ',
          key,
          value
        );
        return;
      }

      if (key) {
        sessionStorageSaveAndUpdate(key, value);
      }
    });
  }

  onClickSetShowPassword(event: Event): void {
    event.preventDefault();
    this.showPassword = !this.showPassword;
  }
}
