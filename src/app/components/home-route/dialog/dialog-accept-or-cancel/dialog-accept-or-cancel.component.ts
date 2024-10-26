import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import IDialogAcceptOrCancel from '../../../../types/interfaces/dialog/interface-dialog-accept-or-cancel';

@Component({
  selector: 'app-dialog-accept-or-cancel',
  templateUrl: './dialog-accept-or-cancel.component.html',
})
export class DialogAcceptOrCancelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAcceptOrCancelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogAcceptOrCancel
  ) {
    console.log("🚀 ~ DialogAcceptOrCancelComponent ~ data:", this.data)
  }

  ngOnInit() {
  }

  // esta modal muestra 2 botones: "Aceptar" y "Cancelar", ejecutando una funcion que devuelve a cual boton se le dio click
  onClickAccept = (): void => this.dialogRef.close('accept');

  onClickCancel = (): void =>  this.dialogRef.close('cancel');
}
