import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGeneralInformationComponent } from './person-general-information.component';

describe('PersonGeneralInformationsComponent', () => {
  let component: PersonGeneralInformationComponent;
  let fixture: ComponentFixture<PersonGeneralInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonGeneralInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
