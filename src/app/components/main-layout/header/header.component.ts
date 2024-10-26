import { Component, OnInit } from '@angular/core';
import { objSessionStorage } from '../../../types/constants/constant-session-storage';
import { sessionStorageListValue } from '../../../utils/func/sessionStorage';
import IObjSessionStorage from '../../../types/interfaces/interface-property-session-storage';

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
