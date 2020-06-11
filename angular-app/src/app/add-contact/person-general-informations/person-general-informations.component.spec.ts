import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGeneralInformationsComponent } from './person-general-informations.component';

describe('PersonGeneralInformationsComponent', () => {
  let component: PersonGeneralInformationsComponent;
  let fixture: ComponentFixture<PersonGeneralInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonGeneralInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonGeneralInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
