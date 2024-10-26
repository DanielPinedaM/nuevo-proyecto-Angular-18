import { Component, OnInit } from '@angular/core';
import menuOptions from '../../../types/constants/constant-menu';
import IMenuOptions from '../../../types/interfaces/interface-menu';
import { CurrentRouteService } from '../../../service/RxJS-BehaviorSubject/current-route.service';
import { Router } from '@angular/router';
import path from '../../../types/constants/constant-path';
import { DialogAcceptOrCancelComponent } from '../../home-route/dialog/dialog-accept-or-cancel/dialog-accept-or-cancel.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuOptions: IMenuOptions[] = menuOptions;

  currentRoute: string = '';

  showText: boolean = true;

  constructor(
    private currentRouteService: CurrentRouteService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.onChangeCurrentRoute();
  }

  private onChangeCurrentRoute(): void {
    this.currentRouteService.currentRoute$.subscribe((currentRoute: string) => {
      this.currentRoute = currentRoute;
    });
  }

  onClickMinimizeOrMaximizeMenu(): void {
    this.showText = !this.showText;
  }

  onClickLogOut(): void {
    const dialogRef = this.dialog.open(DialogAcceptOrCancelComponent, {
      data: {
        message: "¿Esta seguro que desea cerrar sesión?"
      },
      maxWidth: '500px',
      width: 'inherit',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'accept') {
        this.router.navigate(['/' + path.login.login])
      }
    });
  }
}
