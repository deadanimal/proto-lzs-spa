import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KursusDanProgramComponent } from './kursus-dan-program.component';

describe('KursusDanProgramComponent', () => {
  let component: KursusDanProgramComponent;
  let fixture: ComponentFixture<KursusDanProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursusDanProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursusDanProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
