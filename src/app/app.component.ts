import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { sessionStorageSearch } from './utils/func/sessionStorage';
import { constImmutableProperties, objSessionStorage } from './types/constants/constant-session-storage';
import GeneralClass from './utils/class/GeneralClass';
import { Router } from '@angular/router';
import path from './types/constants/constant-path';
import { LoaderService } from './service/RxJS-BehaviorSubject/layout/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loader: boolean = false;

  constructor(
    private bnIdle: BnNgIdleService,
    private router: Router,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.getLoader();
    this.logOutDueToInactivity();
    this.closeSessionWhenModifyingSessionStorage();
  }

  private getLoader(): void {
    this.loaderService.getLoader().subscribe((loader: boolean) => {
      if (loader) {
        const _timeout: number =  1000 * 60;

        setTimeout(() => {
          this.loader = false;
        }, _timeout)
      }

      this.loader = loader;
    });
  }

  private logOutDueToInactivity(): void {
    this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        if (sessionStorageSearch(objSessionStorage.token!)) {
          this.router.navigate(['/' + path.login.login]);
          GeneralClass.MensajeAlerta('Sesión Inactiva', 'Su sesión ya no se encuentra activa, ingrese nuevamente', 3);
        }
      }
    });
  }

  private closeSessionWhenModifyingSessionStorage(): void {
    const immutableProperties: string[] = constImmutableProperties;
    window.addEventListener('storage', (event: StorageEvent) => {
      const modifiedProperty: string = event.key!;
      const indexOf: number = immutableProperties.indexOf(modifiedProperty);

      if (indexOf > -1) {
        this.router.navigate(['/' + path.login.login]);
        GeneralClass.MensajeAlerta('Sesión Inactiva', 'Su sesión ya no se encuentra activa, ingrese nuevamente', 3);
      }
    });
  }
}
