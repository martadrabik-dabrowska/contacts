import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayOfObtainingComponent } from './way-of-obtaining.component';

describe('WayOfObtainingComponent', () => {
  let component: WayOfObtainingComponent;
  let fixture: ComponentFixture<WayOfObtainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayOfObtainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayOfObtainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
