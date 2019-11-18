import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisColeguillasComponent } from './mis-coleguillas.component';

describe('MisColeguillasComponent', () => {
  let component: MisColeguillasComponent;
  let fixture: ComponentFixture<MisColeguillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisColeguillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisColeguillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
