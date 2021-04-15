import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanKerjayaComponent } from './pengurusan-kerjaya.component';

describe('PengurusanKerjayaComponent', () => {
  let component: PengurusanKerjayaComponent;
  let fixture: ComponentFixture<PengurusanKerjayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanKerjayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanKerjayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
