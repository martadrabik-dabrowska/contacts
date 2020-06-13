import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodOfAcquisitionComponent } from './method-of-acquisition.component';

describe('MethodOfAcquisitionComponent', () => {
  let component: MethodOfAcquisitionComponent;
  let fixture: ComponentFixture<MethodOfAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodOfAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodOfAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
