import { Component, OnInit } from '@angular/core';
import { objSessionStorage } from '../../../types/constants/const-session-storage';
import IObjSessionStorage from '../../../types/interfaces/interface-property-session-storage';
import { sessionStorageListValue } from '../../../utils/func/sessionStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  objSessionStorage: IObjSessionStorage = {
    username: sessionStorageListValue(objSessionStorage.username!),
  }

  constructor() { }

  ngOnInit() { }

}
