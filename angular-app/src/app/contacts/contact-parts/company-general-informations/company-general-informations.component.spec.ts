import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGeneralInformationsComponent } from './company-general-informations.component';

describe('CompanyGeneralInformationsComponent', () => {
  let component: CompanyGeneralInformationsComponent;
  let fixture: ComponentFixture<CompanyGeneralInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGeneralInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGeneralInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
