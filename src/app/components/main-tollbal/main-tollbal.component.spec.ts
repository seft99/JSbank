import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTollbalComponent } from './main-tollbal.component';

describe('MainTollbalComponent', () => {
  let component: MainTollbalComponent;
  let fixture: ComponentFixture<MainTollbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTollbalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTollbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
