import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwCardComponent } from './fw-card.component';

describe('FwCardComponent', () => {
  let component: FwCardComponent;
  let fixture: ComponentFixture<FwCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
