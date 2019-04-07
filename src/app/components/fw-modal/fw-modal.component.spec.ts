import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FwModalComponent } from './fw-modal.component';

describe('FwModalComponent', () => {
  let component: FwModalComponent;
  let fixture: ComponentFixture<FwModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
