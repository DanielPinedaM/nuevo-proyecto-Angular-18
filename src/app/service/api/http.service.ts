import { Location } from '@angular/common';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Observable, timeout } from 'rxjs';
import path from '../../types/constants/constant-path';
import { LoaderService } from '../RxJS-BehaviorSubject/layout/loader.service';
import { sessionStorageListValue, sessionStorageSearch } from '../../utils/func/sessionStorage';
import { objSessionStorage } from '../../types/constants/constant-session-storage';

type Action = 'login' | 'logout' | 'create' | 'update' | 'delete' | 'read';

export enum Method {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
  DOWNLOAD = 'download',
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();

  private httpHeader!: HttpHeaders;
  private _timeout: number;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private location: Location,
    private loaderService: LoaderService,
  ) {
    this._timeout = 1000 * 60;
  }

  public async request<B = any, T = any>(
    method: Method,
    url: string,
    action: Action,
    isASecurityEndpoint: boolean = false,
    body?: B,
    queryParams?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[];
        },
    options?: {
      responseType?: string;
      headers?: {
        [name: string]: string | number | (string | number)[];
      };
    }
  ): Promise<T> {
    this.loaderService.setLoader(true);

    this.httpHeader = new HttpHeaders(options?.headers);

    this.httpHeader = this.httpHeader.append('X-JFK-ACTION', action);

    if (isASecurityEndpoint) {
      if (sessionStorageSearch(objSessionStorage.token!)) {
        this.httpHeader = this.httpHeader.append(
          'authorization',
          `Bearer ${sessionStorageListValue(objSessionStorage.token!)}`
        );
      }
    }

    let res = new Observable<T>();

    const httpOptions = {
      headers: this.httpHeader,
      // HttpClient.responseType require 'json', but you can cheat the system with any string as 'json'
      responseType: options?.responseType as 'json',
      params: queryParams,
    };

    switch (method) {
      case Method['GET']:
        res = this.httpClient.get<T>(url, httpOptions);
        break;
      case Method['POST']:
        res = this.httpClient.post<T>(url, body, httpOptions);
        break;
      case Method['PUT']:
        res = this.httpClient.put<T>(url, body, httpOptions);
        break;
      case Method['PATCH']:
        res = this.httpClient.patch<T>(url, body, httpOptions);
        break;
      case Method['DELETE']:
        res = this.httpClient.delete<T>(url, {
          ...httpOptions,
          body,
        });
        break;
    }

    res.pipe(timeout(this._timeout));

    try {

      return await lastValueFrom<T>(res);
    } catch (error: any) {
      console.error('❌ error al ejecutar petición http \n ', error);

      if (error instanceof HttpErrorResponse) {
        if ([500, 404].includes(error['status'])) throw error;

        if (error?.error?.status === 401) {
          this.unauthorized();
          return Promise.resolve({} as T);
        }
        console.error('❌ HttpErrorResponse \n ', error);
      }

      if (error?.error) {
        throw error.error;
      }

      return Promise.resolve({
        completada: false,
        error: true,
        status: 400,
        titulo: 'ERROR',
        mensaje: 'Error ejecutando el proceso',
      } as T);
    } finally {
      this.loaderService.setLoader(false);
    }
  }

  private unauthorized(): void {

    this.router.navigate(['/' + path.login.login], {
      queryParams: {
        redirect: this.location.path().replace('&', '::'),
      },
    });

    this.isLoading.emit(false);
    // * Se recarga como solución temporal (machetazo) para el loader infinito
    location.reload();
  }
}
