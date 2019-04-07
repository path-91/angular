import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwSkeletonComponent } from './fw-skeleton.component';

describe('FwSkeletonComponent', () => {
  let component: FwSkeletonComponent;
  let fixture: ComponentFixture<FwSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
