import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwToastsComponent } from './fw-toasts.component';

describe('FwToastsComponent', () => {
  let component: FwToastsComponent;
  let fixture: ComponentFixture<FwToastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwToastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
