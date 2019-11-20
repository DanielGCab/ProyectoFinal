import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColeguillaComponent } from './info-coleguilla.component';

describe('InfoColeguillaComponent', () => {
  let component: InfoColeguillaComponent;
  let fixture: ComponentFixture<InfoColeguillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoColeguillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoColeguillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
