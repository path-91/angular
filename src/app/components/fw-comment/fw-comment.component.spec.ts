import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwCommentComponent } from './fw-comment.component';

describe('FwCommentComponent', () => {
  let component: FwCommentComponent;
  let fixture: ComponentFixture<FwCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
