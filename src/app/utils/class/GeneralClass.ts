import Swal from 'sweetalert2';
import constSweetAlert2 from '../../types/constants/constant-sweet-alert-2';

export default class GeneralClass {
  public static MensajeAlerta(titulo: string, mensaje: string, tipo: number, onClose: any = null) {
      if (tipo == 1) {
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: titulo,
              text: mensaje,
              showConfirmButton: false,
              showCloseButton: true,
              //timer: 4000
          })
      }
      else if (tipo == 2) {
          Swal.fire({
              position: 'center',
              icon: 'info',
              title: titulo,
              text: mensaje,
              showConfirmButton: false,
              showCloseButton: true,
              //timer: 4000
          })
      }
      else if (tipo == 3) {
          Swal.fire({
              position: 'center',
              icon: 'warning',
              title: titulo,
              text: mensaje,
              showConfirmButton: false,
              showCloseButton: true,
              //timer: 6000
          })
      }
      else if (tipo == 4) {
          Swal.fire({
              position: 'center',
              icon: 'error',
              title: titulo,
              text: mensaje,
              showConfirmButton: false,
              iconColor: '#AC0000',
              showCloseButton: true,
              didClose: onClose
              //timer: 6000
          })
      }
  }

  public static MensajeAlertaConfirmacion(titulo: string, mensaje: string, tipo: number, showCancelButton: boolean = true, confirmButtonText: string = 'Sí', cancelButtonText: string = 'No') {
      return Swal.fire({
          title: titulo,
          text: mensaje,
          icon: tipo === 1 ? 'success' : tipo === 2 ? 'info' : tipo === 3 ? 'warning' : 'error',
          showCancelButton,
          confirmButtonColor: constSweetAlert2.confirmButtonColor,
          cancelButtonColor: constSweetAlert2.cancelButtonColor,
          confirmButtonText,
          cancelButtonText,
          showCloseButton: true,
      });
  }

  public static normalizeStr = (string: string | any): string | any => {
    if (typeof string === 'string' || string instanceof String) {
      return string.trim()
                   .toLowerCase()
                   .normalize('NFD')
                   .replace(/[\u0300-\u036f]/g, '');
    }

    // Ejemplo: '  Compañía ' devuelve 'compania', true devuelve true
    return string;
 };
}
