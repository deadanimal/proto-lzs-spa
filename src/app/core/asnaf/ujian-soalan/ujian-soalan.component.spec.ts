import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjianSoalanComponent } from './ujian-soalan.component';

describe('UjianSoalanComponent', () => {
  let component: UjianSoalanComponent;
  let fixture: ComponentFixture<UjianSoalanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjianSoalanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjianSoalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
