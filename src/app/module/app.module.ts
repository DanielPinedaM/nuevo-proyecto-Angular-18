//#region @angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//#endregion @angular

//#region Angular Material
import { AngularMaterialModule } from './angular-material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
//#endregion Angular Material

//#region componentes de Angular
import { PagesModule } from './pages.module';
//#endregion componentes de Angular

//#region componente principal
import { AppComponent } from '../app.component';
//#endregion componente principal

//#region cambiar idioma
import { CustomPaginatorIntl } from '../utils/class/AngularMaterialCustomPaginatorIntl';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localeEs, 'es');
//#endregion cambiar idioma

//#region enrutado
import { AppRoutingModule } from '../app-routing.module';
import { provideHttpClient } from '@angular/common/http';
//#end region enrutado

@NgModule({
  declarations: [
    //#region componente principal
    AppComponent,
    //#endregion componente principal
  ],
  imports: [
    //#region @angular
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    //#endregion @angular

    //#region enrutado
    AppRoutingModule,
    //#endregion enrutado

    //#region componentes de Angular
    PagesModule,
    //#endregion componentes de Angular

    //#region Angular Material
    AngularMaterialModule,
    //#endregion Angular Material
  ],
  providers: [
    //#region @angular
    { provide: LOCALE_ID, useValue: 'es' },
    provideHttpClient(),
    //#endregion @angular

    //#region Angular Material
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl },
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    //#endregion Angular Material
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
