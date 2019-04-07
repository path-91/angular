import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwButtonComponent } from './fw-button.component';

describe('FwButtonComponent', () => {
  let component: FwButtonComponent;
  let fixture: ComponentFixture<FwButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
