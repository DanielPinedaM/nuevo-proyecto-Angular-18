/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BotsComponent } from './bots.component';

describe('BotsComponent', () => {
  let component: BotsComponent;
  let fixture: ComponentFixture<BotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
