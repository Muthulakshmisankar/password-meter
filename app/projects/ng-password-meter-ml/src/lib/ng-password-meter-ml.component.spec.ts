import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPasswordMeterMlComponent } from './ng-password-meter-ml.component';

describe('NgPasswordMeterMlComponent', () => {
  let component: NgPasswordMeterMlComponent;
  let fixture: ComponentFixture<NgPasswordMeterMlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPasswordMeterMlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPasswordMeterMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
