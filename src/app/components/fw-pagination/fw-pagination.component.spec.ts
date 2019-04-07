import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwPaginationComponent } from './fw-pagination.component';

describe('FwPaginationComponent', () => {
  let component: FwPaginationComponent;
  let fixture: ComponentFixture<FwPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
