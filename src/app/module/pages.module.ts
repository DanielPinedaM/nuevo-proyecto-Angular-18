//#region @angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//#endregion @angular

//#region modulos de Angular Material
import { AngularMaterialModule } from './angular-material.module';
//#endregion modulos de Angular Material

//#region componentes de Angular Material
// login
import { LoginComponent } from '../components/login/login.component';

// home
import { HomeComponent } from '../components/main-layout/home/home.component';

// error 404 - ruta inexistente
import { Error404NonExistentPathComponent } from '../components/main-layout/error-404-non-existent-path/error-404-non-existent-path.component';

// menu
import { MenuComponent } from '../components/main-layout/menu/menu.component';

// header (encabezado)
import { HeaderComponent } from '../components/main-layout/header/header.component';

// componente con icono para cerrar las ventanas modales
import { MatDialogCloseIconComponent } from '../components/home-route/dialog/mat-dialog-close-icon/mat-dialog-close-icon.component';

// modal para aceptar o cancelar una accion
import { DialogAcceptOrCancelComponent } from '../components/home-route/dialog/dialog-accept-or-cancel/dialog-accept-or-cancel.component';

// bots
import { BotsComponent } from '../components/home-route/bots/bots.component';
//#endregion componentes de Angular Material

//#region componentes de Angular
const angularComponents: any[] = [
  // login
  LoginComponent,

  // home
  HomeComponent,

  // error 404 - ruta inexistente
  Error404NonExistentPathComponent,

  // menu
  MenuComponent,

  // header (encabezado)
  HeaderComponent,

  // bots
  BotsComponent,

  // componente con icono para cerrar las ventanas modales
  MatDialogCloseIconComponent,

  // modal para aceptar o cancelar una accion
  DialogAcceptOrCancelComponent,
];
//#endregion componentes de Angular

@NgModule({
  declarations: [
    //#region componentes de Angular
    ...angularComponents,
    //#endregion componentes de Angular
  ],
  imports: [
    //#region @angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //#endregion @angular

    //#region Angular Material
    AngularMaterialModule,
    //#endregion Angular Material
  ],
  exports: [
    //#region componentes de Angular
    ...angularComponents,
    //#endregion componentes de Angular
  ],
})
export class PagesModule { }
