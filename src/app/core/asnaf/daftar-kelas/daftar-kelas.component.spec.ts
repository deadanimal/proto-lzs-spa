import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarKelasComponent } from './daftar-kelas.component';

describe('DaftarKelasComponent', () => {
  let component: DaftarKelasComponent;
  let fixture: ComponentFixture<DaftarKelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarKelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarKelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
