import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanGpamComponent } from './permohonan-gpam.component';

describe('PermohonanGpamComponent', () => {
  let component: PermohonanGpamComponent;
  let fixture: ComponentFixture<PermohonanGpamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermohonanGpamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermohonanGpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
